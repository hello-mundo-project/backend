/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi, { string } from "joi";

const passwordPattern = /^(?=.*[A-Za-z])(?=.*[!@#$])[A-Za-z0-9!@#$]*$/;
const nicknamePattern = /^[^'"!@#$%^&*()_+{}[\]:;<>,.?/~`|\\]+[^\s]+$/;
const ObjectIdPattern = /^[0-9a-fA-F]{24}$/;

const emailJoi = Joi.string().trim().min(10).max(30).email().required();
const passwordJoi = Joi.string().trim().min(8).max(12).required().regex(passwordPattern);
const nicknameJoi = Joi.string().trim().min(2).max(10).regex(nicknamePattern);
const introduceJoi = Joi.string().min(0).max(300);
const annualJoi = Joi.number();
const careerJoi = Joi.string();
const IdJoi = Joi.string().regex(ObjectIdPattern);
const skillJoi = Joi.array().items(Joi.string());

const signupJoiSchema = Joi.object({
  email: emailJoi,
  check_email: emailJoi,
  password: passwordJoi,
  nickname: nicknameJoi,
  annual: annualJoi,
  career_id: IdJoi,
  skill_id: skillJoi
});

const loginJoiSchema = Joi.object({
  email: emailJoi,
  password: passwordJoi
});

const changePasswordJoiSchema = passwordJoi;

async function validateSignup(user: any) {
  return signupJoiSchema.validate(user);
}

async function validateLogin(user: any) {
  return loginJoiSchema.validate(user);
}

async function validateChangePassword(password: string) {
  return changePasswordJoiSchema.validate(password);
}

async function validateEmail(email: string) {
  return emailJoi.validate(email);
}
export { validateSignup, validateLogin, validateChangePassword, validateEmail };
