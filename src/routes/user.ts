/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import { ObjectId } from "mongoose";
import { UserService } from "../services/userService";
import { PostService } from "../services/postService";
import { asyncHandler } from "../utils/asyncHandler";
import { ErrorHandler } from "../utils/errorHandler";
import { mappingCategory } from "../utils/mappingString";
import { ResponseHandler } from "../types/responseHandler";
import { validateEmail, validateUserUpdate, validateId } from "../validators/userValidators";

const userRouter = Router();
//내 북마크 조회
userRouter.get(
  "/bookmark/:categoryName?",
  asyncHandler(async (req, res, next) => {
    const userId = (req.user as { id: ObjectId })?.id;

    if (!userId) throw ErrorHandler.Unauthorized();

    const userBookmark = await UserService.getBookmark(userId);
    if (!userBookmark) throw ErrorHandler.InternalServerError("조회 실패.");

    res.status(200).json({ status: 200, message: "북마크 조회 성공", data: userBookmark });
  })
);

//내 북마크 카테고리별로 조회
userRouter.get(
  "/bookmark/:categoryName",
  asyncHandler(async (req, res, next) => {
    const userId = (req.user as { id: ObjectId })?.id;
    if (!userId) throw ErrorHandler.Unauthorized();

    const categoryName: string = mappingCategory(req.params.categoryName);

    const userBookmark = await UserService.getBookmarkByCategoryName(userId, categoryName);

    if (!userBookmark) throw ErrorHandler.InternalServerError("조회 실패.");
    res.status(200).json({ status: 200, message: "북마크 조회 성공", data: userBookmark });
  })
);

userRouter.get(
  "/mypost/:page?/:filter?",
  asyncHandler(async (req, res, next) => {
    const user_id = (req.user as { id: ObjectId })?.id;
    const page = parseInt(req.params?.page ? req.params?.page : "1");
    const filter: string = mappingCategory(req.params?.filter);

    const myPost = await PostService.getMyPost(user_id, page, filter);
    if (!myPost) throw ErrorHandler.BadRequest("조회 실패");
    res.status(200).json({ message: "조회 완료", data: myPost });
  })
);

//북마크 토글
userRouter.post(
  "/bookmark/:id",
  asyncHandler(async (req, res, next) => {
    const user_id = (req.user as { id: ObjectId })?.id;
    const post_id = req.params.id;
    const error = [await validateId(user_id), await validateId(post_id)];
    console.log(error);
    if (error.includes(null) == false) throw ErrorHandler.BadRequest("요청 값 불량");
    const bookmark: any = await PostService.checkBookmark(post_id, user_id);
    if (bookmark && !bookmark.deletedCount) return res.status(200).json({ message: "생성 성공" });
    else if (bookmark.deletedCount) return res.status(200).json({ message: "삭제 성공" });
    else throw ErrorHandler.InternalServerError("토글 실패");
  })
);

//개인 정보 조회
userRouter.get(
  "/myprofile",
  asyncHandler(async (req, res, next) => {
    const id = (req.user as { id: ObjectId })?.id;
    const profile: any | ResponseHandler = await UserService.getUserInfo(id);
    console.log(id);

    if (!profile) {
      throw ErrorHandler.Conflict("조회 실패");
    }

    if (profile.deletedAt != null) {
      throw ErrorHandler.NotFound("탈퇴한 회원");
    }

    res.status(200).json({ status: 200, message: `조회 성공`, data: profile });
  })
);

//개인 정보 수정
userRouter.put(
  "/modify",
  asyncHandler(async (req, res, next) => {
    const userInfo = req.body;
    userInfo._id = (req.user as { id: ObjectId })?.id;
    const { error } = await validateUserUpdate(userInfo);
    console.log(error);
    if (error) {
      throw ErrorHandler.BadRequest("요청 값 불량");
    }

    const updatedUser: any | ResponseHandler = await UserService.setUserInfo(userInfo);

    if (updatedUser.err) throw ErrorHandler.Conflict("정보 수정 실패");

    res.status(200).json({ status: 200, message: "정보 수정 성공", data: updatedUser });
  })
);

//회원탈퇴
//도큐먼트를 삭제하는게 아니라 그냥 deletedAt 값을 추가/갱신한다
userRouter.put(
  "/withdraw",
  asyncHandler(async (req, res, next) => {
    const userId = (req.user as { id: ObjectId })?.id;
    const user = await UserService.deleteUser(userId);

    if (user?.deletedAt === null) throw ErrorHandler.InternalServerError("탈퇴 실패");
    res.status(204).json({ status: 204 });
  })
);

//비밀번호 찾기
userRouter.post(
  "/find-password",
  asyncHandler(async (req, res, next) => {
    const userInfo = req.body;

    const { error } = await validateEmail(userInfo.email);

    if (!userInfo.email || error) {
      throw ErrorHandler.BadRequest("요청 값 불량");
    }

    await UserService.findPassword(userInfo);

    res.status(200).json({ status: 200, message: `링크 발송 성공` });
  })
);

export { userRouter };
