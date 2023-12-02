import {
  SkillCategory,
  SkillCategoryName,
  Skill,
  LanguageSkill,
  FrontendSkill,
  BackendSkill,
  DesignerSkill,
  CrossPlatformSkill,
  GameEngineSkill,
  OtherSkill
} from "../../../types/seedTypes";

const languageSkillCategory: SkillCategory = {
  name: SkillCategoryName.Language
};

const frontendSkillCategory: SkillCategory = {
  name: SkillCategoryName.Frontend
};

const backendSkillCategory: SkillCategory = {
  name: SkillCategoryName.Backend
};

const designerSkillCategory: SkillCategory = {
  name: SkillCategoryName.Designer
};

const gameEngineSkillCategory: SkillCategory = {
  name: SkillCategoryName.GameEngine
};

const crossPlatformSkillCategory: SkillCategory = {
  name: SkillCategoryName.CrossPlatform
};

const otherSkillCategory: SkillCategory = {
  name: SkillCategoryName.Other
};

const customSkillCategory: SkillCategory = {
  name: SkillCategoryName.Custom
};

export const skillCategories: SkillCategory[] = [
  languageSkillCategory,
  frontendSkillCategory,
  backendSkillCategory,
  designerSkillCategory,
  gameEngineSkillCategory,
  crossPlatformSkillCategory,
  otherSkillCategory,
  customSkillCategory
];

const languageSkills: Skill<LanguageSkill> = {
  name: [
    "JavaScript",
    "TypeScript",
    "Kotlin",
    "Dart",
    "Swift",
    "Objective-C",
    ".NET",
    "Java",
    "Python",
    "C",
    "C++",
    "Rust",
    "PHP",
    "Go",
    "Ruby",
    "MATLAB"
  ],
  skill_category: "언어"
};

const frontendSkills: Skill<FrontendSkill> = {
  name: ["React", "Vue", "Angular", "Svelte", "Nextjs", "Nuxtjs"],
  skill_category: "프론트엔드"
};

const backendSkills: Skill<BackendSkill> = {
  name: ["Spring", "Nodejs", "Nestjs", "Express", "Django", "Flask", "ASP.NET", "Laravel"],
  skill_category: "백엔드"
};

const designerSkills: Skill<DesignerSkill> = {
  name: ["Figma", "Zeplin", "Adobe PhotoShop", "Adobe Premiere Pro", "Adobe After Effects"],
  skill_category: "디자이너"
};

const gameEngineSkills: Skill<GameEngineSkill> = {
  name: ["Unity", "UnrealEngine"],
  skill_category: "게임엔진"
};

const crossPlatformSkills: Skill<CrossPlatformSkill> = {
  name: ["Flutter", "ReactNative", "Xamarin", "Electron"],
  skill_category: "크로스플랫폼"
};

const otherSkills: Skill<OtherSkill> = {
  name: [
    "Oracle",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "RestAPI",
    "GraphQL",
    "AWS",
    "Kubernetes",
    "Docker",
    "Git",
    "Jest"
  ],
  skill_category: "기타"
};

export const skills: Skill<
  LanguageSkill | FrontendSkill | BackendSkill | DesignerSkill | CrossPlatformSkill | GameEngineSkill | OtherSkill
>[] = [
  languageSkills,
  frontendSkills,
  backendSkills,
  designerSkills,
  crossPlatformSkills,
  gameEngineSkills,
  otherSkills
];
