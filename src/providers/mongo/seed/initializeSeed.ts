import { postCategories } from "./postCategorySeed";
import { careers } from "./careerSeed";
import { skillCategories } from "./skillSeed";
import { citys } from "./cityDistrictSeed";
import { Skill, District } from "../../../types/seedTypes";
import {
  Category,
  CategoryModel,
  Career,
  CareerModel,
  SkillCategory,
  SkillCategoryModel,
  SkillModel,
  CityModel,
  DistrictModel
} from "../../../models";

export async function initPostCategory() {
  for (const categoryName of postCategories) {
    const isExistCategory = await Category.findByCategoryName(categoryName);
    if (!isExistCategory) {
      await CategoryModel.create({ name: categoryName });
    }
  }
}

export async function initCareer() {
  for (const careerName of careers) {
    const isExistCareer = await Career.findByCareerName(careerName);
    if (!isExistCareer) {
      await CareerModel.create({ name: careerName });
    }
  }
}

export async function initSkillCategory() {
  for (const skillCategory of skillCategories) {
    const isExistSkillCategory = await SkillCategory.findBySkillCategoryName(skillCategory.name);
    if (!isExistSkillCategory) {
      await SkillCategoryModel.create(skillCategory);
    }
  }
}

export async function initSkill(skills: Skill<string>) {
  const { name, skill_category } = skills;
  const category = await SkillCategory.findBySkillCategoryName(skill_category);

  if (!category) return;

  name.map(
    async (skill: string) =>
      await SkillModel.create({
        name: skill,
        skillCategory_id: category._id
      })
  );
}

export async function initCity() {
  for (const city of citys) {
    const isExistCity = await CityModel.findOne({ name: city.name });
    if (!isExistCity) {
      await CityModel.create(city);
    }
  }
}

export async function initDistrict(districts: District<string>) {
  const { name, city_name } = districts;
  const city = await CityModel.findOne({ name: city_name });

  if (!city) return;

  name.map(
    async (district: string) =>
      await DistrictModel.create({
        name: district,
        city_id: city._id
      })
  );
}
