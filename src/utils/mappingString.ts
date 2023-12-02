import { Category } from "../types/category.d";
import { Career } from "../types/career.d";
import { City } from "../types/city.d";
import { SkillCategory } from "../types/skillCategory.d";

export function mappingCategory(name: keyof Category | string): string {
  const categoryMapping: Record<keyof Category, string> = {
    project: "프로젝트",
    hackathon: "해커톤",
    study: "스터디"
  };

  return categoryMapping[name as keyof Category] || name;
}

export function mappingCareer(name: keyof Career | string): string {
  const careerMapping: Record<keyof Career, string> = {
    frontend: "프론트엔드",
    backend: "백엔드",
    fullStack: "풀스택",
    designer: "디자이너",
    gameEngine: "게임엔진",
    ios: "IOS",
    android: "안드로이드",
    devops: "데브옵스",
    pm: "PM",
    planner: "기획자"
  };

  return careerMapping[name as keyof Career] || name;
}

export function mappingCity(name: keyof City | string): string {
  const cityMapping: Record<keyof City, string> = {
    seoul: "서울특별시",
    busan: "부산광역시",
    incheon: "인천광역시",
    daegu: "대구광역시",
    daejeon: "대전광역시",
    gwangju: "광주광역시",
    ulsan: "울산광역시",
    sejong: "세종특별자치시",
    gyeonggi: "경기도",
    gangwon: "강원도",
    chungbuk: "충청북도",
    chungnam: "충청남도",
    jeonbuk: "전라북도",
    jeonnam: "전라남도",
    gyeongbuk: "경상북도",
    gyeongnam: "경상남도",
    jeju: "제주특별자치도"
  };

  return cityMapping[name as keyof City] || name;
}

export function mappingSkillCategory(name: keyof SkillCategory | string): string {
  const skillCategoryMapping: Record<keyof SkillCategory, string> = {
    language: "언어",
    frontend: "프론트엔드",
    backend: "백엔드",
    designer: "디자이너",
    crossPlatform: "크로스플랫폼",
    gameEngine: "게임엔진",
    other: "기타",
    custom: "사용자정의"
  };

  return skillCategoryMapping[name as keyof SkillCategory] || name;
}
