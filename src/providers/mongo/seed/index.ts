import mongoose from "mongoose";
import { initPostCategory, initCareer, initSkillCategory, initSkill, initCity, initDistrict } from "./initializeSeed";
import { districts } from "./cityDistrictSeed";
import { skills } from "./skillSeed";

export default async function generateSeed() {
  try {
    await initSkillCategory();
    await Promise.allSettled(skills.map((skill) => initSkill(skill)));
    await initCity();
    await Promise.allSettled(districts.map((district) => initDistrict(district)));
    await initPostCategory();
    await initCareer();

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
  }
}
