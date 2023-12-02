/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from "joi";

const passwordPattern = /^(?=.*[A-Za-z])(?=.*[!@#$])[A-Za-z0-9!@#$]*$/;
const nicknamePattern = /^[^'"!@#$%^&*()_+{}[\]:;<>,.?/~`|\\]+[^\s]+$/;
const ObjectIdPattern = /^[0-9a-fA-F]{24}$/;

const emailJoi = Joi.string().trim().min(10).max(30).email();
const passwordJoi = Joi.string().trim().min(8).max(12).regex(passwordPattern);
const nicknameJoi = Joi.string().trim().min(2).max(10).regex(nicknamePattern);
const introduceJoi = Joi.string().min(0).max(300);
const annualJoi = Joi.number();
const idJoi = Joi.string().regex(ObjectIdPattern);
const skillJoi = Joi.array().items(idJoi);
const skillObjectJoi = Joi.object({
    _id: idJoi.allow(""),
    name: Joi.string(),
    skillCategory_id: idJoi
  })
const newSkillArrayJoi = Joi.array().items(skillObjectJoi);
const emailJoiSchema = emailJoi.required();

const userUpdateJoiSchema = Joi.object({
  _id:idJoi,
  nickname: nicknameJoi.required().regex(nicknamePattern),
  annual: annualJoi.required(),
  career_id: idJoi.required(),
  skill_id: skillJoi,
  introduce: introduceJoi.required(),
  newSkillArray: newSkillArrayJoi
});

const changePasswordSchema = Joi.object({
  password: passwordJoi.required().regex(passwordPattern)
});

async function validateEmail(email: any) {
  return emailJoiSchema.validate(email);
}

async function validateUserUpdate(user: any) {
  return userUpdateJoiSchema.validate(user);
}

async function validateChangePassword(password: string) {
  return changePasswordSchema.validate(password);
}

async function validateId(id:any){
  const {error} = idJoi.validate(id)
  if(error) error;
  else return null;
}
export { validateChangePassword, validateUserUpdate, validateEmail , validateId};
