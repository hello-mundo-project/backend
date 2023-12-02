import Joi from "joi";

const minDay = new Date();
const ObjectIdPattern = /^[0-9a-fA-F]{24}$/;

const titleJoi = Joi.string().min(3).max(15).required();
const contentJoi = Joi.string().min(5).max(200).required();
const dateJoi = Joi.date().min(minDay.getDay()).allow(null);
const stringJoi = Joi.string().allow(null);
const numberJoi = Joi.number().allow(null);
const recruit_statusJoi = Joi.boolean();
const idJoi = Joi.string().regex(ObjectIdPattern).allow("");
const idArrayJoi = Joi.array().items(idJoi).allow(null);

const addPostSchema = Joi.object({
  user_id: idJoi,
  title: titleJoi,
  content: contentJoi,
  contact: stringJoi,
  expected_date: dateJoi,
  duration: numberJoi,
  headcount: numberJoi,
  viewcount: numberJoi,
  progress_way: stringJoi,
  contactJoi: stringJoi,
  recruit_status: recruit_statusJoi,
  deadline: dateJoi,
  deleteAt: Joi.date().allow(null),
  career_id: idArrayJoi,
  city_id: idJoi.allow(""),
  district_id: idJoi.allow(""),
  category_id: idJoi,
  skill_id: idArrayJoi
});

const modifyPostSchema = Joi.object({
  _id: idJoi.required(),
  user_id: idJoi.required(),
  title: titleJoi,
  content: contentJoi,
  contact: stringJoi,
  expected_date: dateJoi,
  duration: numberJoi,
  headcount: numberJoi,
  viewcount: numberJoi,
  progress_way: stringJoi,
  contactJoi: stringJoi,
  recruit_status: recruit_statusJoi,
  deadline: dateJoi,
  deleteAt: Joi.date().allow(null),
  career_id: idArrayJoi,
  district_id: idJoi.allow(""),
  city_id: idJoi.allow(""),
  category_id: idJoi,
  skill_id: idArrayJoi
});

const deletePostSchema = Joi.object({
  _id: idJoi.required(),
  user_id: idJoi.required()
});

async function validateAddPost(value: any) {
  return addPostSchema.validate(value);
}

async function validateUpdatePost(value: any) {
  return modifyPostSchema.validate(value);
}

async function validateDeletePost(value: any) {
  return deletePostSchema.validate(value);
}

async function validateId(id: any) {
  const { error } = idJoi.validate(id);
  if (error) error;
  else return null;
}
export { validateAddPost, validateUpdatePost, validateDeletePost, validateId };
