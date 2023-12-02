/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import passport from "passport";
import { AccountService } from "../services/accountService";
import { ResponseHandler } from "../types/responseHandler";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { signJWT } from "../utils/jwt";
import { validateSignup, validateChangePassword, validateEmail } from "../validators/accountValidators";

const accountRouter = Router();

accountRouter.post(
  "/email-duplicate",
  asyncHandler(async (req, res, next) => {
    const { email } = req.body;

    const { error } = await validateEmail(email);
    if (error) throw ErrorHandler.BadRequest("형식 불량");
    const isEmailDuplicate = await AccountService.checkEmailDuplicate(email);
    if (!isEmailDuplicate) throw ErrorHandler.Conflict("중복된 이메일 주소");

    res.status(200).json({ status: 200, message: "사용 가능한 이메일 주소" });
  })
);

accountRouter.post(
  "/signup",
  asyncHandler(async (req, res, next) => {
    const value = req.body;
    const isEmailDuplicate = await AccountService.checkEmailDuplicate(value.email);
    if (!isEmailDuplicate) throw ErrorHandler.Conflict("중복된 이메일 주소");

    const { error } = await validateSignup(value);
    if (error) throw ErrorHandler.BadRequest("요청 값 불량");
    const addUser: ResponseHandler | any = await AccountService.addUser(value);
    if (!addUser) throw ErrorHandler.Conflict("회원가입 실패");

    res.status(200).json({ status: 200, message: "회원 가입이 완료되었습니다" });
  })
);

accountRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  asyncHandler(async (req, res, next) => {
    const userId = (req.user as { id: string }).id;
    const accessToken = await signJWT({ id: userId }, "access");

    const threeDays = 60 * 60 * 24 * 1000 * 3;
    res.cookie("_ast", accessToken, { httpOnly: true, maxAge: threeDays, sameSite: "strict" });
    res.status(200).json({ status: 200, message: "로그인 성공" });
  })
);

accountRouter.post(
  "/logout",
  asyncHandler(async (req, res, next) => {
    // httpOnly 토큰은 건드릴 수 없기 때문에 블랙리스트를 운영하는 방법도 좋다.
    res.cookie("_ast", "", { httpOnly: true, expires: new Date(0), sameSite: "strict" });
    res.status(200).json({ status: 200, message: "로그아웃 성공" });
  })
);

accountRouter.put(
  "/change-password/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const { password } = req.body;

    const { error } = await validateChangePassword(password);
    if (error) throw ErrorHandler.BadRequest("형식 불량");

    await AccountService.changePassword(id, password);

    res.status(200).json({ status: 200, message: "변경 성공" });
  })
);

export { accountRouter };
