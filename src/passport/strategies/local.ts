import { Strategy as LocalStrategy } from "passport-local";
import { AccountService } from "../../services/accountService";
import { ResponseHandler } from "../../types/responseHandler.d";
import { ErrorHandler } from "../../utils/errorHandler";
// import { validateLogin } from "../../validators";

const config = {
  usernameField: "email",
  passwordField: "password"
};

const local = new LocalStrategy(config, async (email, password, done) => {
  try {
    // const { error, value } = await validateLogin({ email, password });
    // if (error) throw { status: 400, message: "요청한 값을 다시 확인해주세요." };

    const localUserId: ResponseHandler | any = await AccountService.localLogin({ email, password });
    if (!localUserId) throw ErrorHandler.Unauthorized("로그인 실패");

    done(null, localUserId);
  } catch (error) {
    done(error, false);
  }
});

export default local;
