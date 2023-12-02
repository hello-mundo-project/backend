export type ProgressWay = "프로젝트" | "해커톤" | "스터디";

export type Career =
  | "프론트엔드"
  | "백엔드"
  | "풀스택"
  | "디자이너"
  | "게임엔진"
  | "IOS"
  | "안드로이드"
  | "데브옵스"
  | "PM"
  | "기획자";

export type LanguageSkill =
  | "JavaScript"
  | "TypeScript"
  | "Kotlin"
  | "Dart"
  | "Swift"
  | "Objective-C"
  | ".NET"
  | "Java"
  | "Python"
  | "C"
  | "C++"
  | "Rust"
  | "PHP"
  | "Go"
  | "Ruby"
  | "MATLAB";

export type FrontendSkill = "React" | "Vue" | "Angular" | "Svelte" | "Nextjs" | "Nuxtjs";

export type BackendSkill = "Spring" | "Nodejs" | "Nestjs" | "Express" | "Django" | "Flask" | "ASP.NET" | "Laravel";

export type DesignerSkill = "Figma" | "Zeplin" | "Adobe PhotoShop" | "Adobe Premiere Pro" | "Adobe After Effects";

export type CrossPlatformSkill = "Flutter" | "ReactNative" | "Xamarin" | "Electron";

export type GameEngineSkill = "Unity" | "UnrealEngine";

export type OtherSkill =
  | "Oracle"
  | "MySQL"
  | "PostgreSQL"
  | "MongoDB"
  | "Firebase"
  | "RestAPI"
  | "GraphQL"
  | "AWS"
  | "Kubernetes"
  | "Docker"
  | "Git"
  | "Jest";

export enum SkillCategoryName {
  Language = "언어",
  Frontend = "프론트엔드",
  Backend = "백엔드",
  Designer = "디자이너",
  CrossPlatform = "크로스플랫폼",
  GameEngine = "게임엔진",
  Other = "기타",
  Custom = "사용자정의"
}

export interface SkillCategory {
  name: SkillCategoryName;
}

export interface Skill<T> {
  name: T[];
  isCustom?: boolean;
  user_id?: string | null;
  skill_category: string;
}

export type SeoulDistrict =
  | "종로구"
  | "중구"
  | "용산구"
  | "성동구"
  | "광진구"
  | "동대문구"
  | "중랑구"
  | "성북구"
  | "강북구"
  | "도봉구"
  | "노원구"
  | "은평구"
  | "서대문구"
  | "마포구"
  | "양천구"
  | "강서구"
  | "구로구"
  | "금천구"
  | "영등포구"
  | "동작구"
  | "관악구"
  | "서초구"
  | "강남구"
  | "송파구"
  | "강동구";

export type BusanDistrict =
  | "중구"
  | "서구"
  | "동구"
  | "영도구"
  | "부산진구"
  | "동래구"
  | "남구"
  | "북구"
  | "해운대구"
  | "사하구"
  | "금정구"
  | "강서구"
  | "연제구"
  | "수영구"
  | "사상구";

export type IncheonDistrict =
  | "중구"
  | "동구"
  | "미추홀구"
  | "연수구"
  | "남동구"
  | "부평구"
  | "계양구"
  | "서구"
  | "강화군"
  | "옹진군";

export type DaeguDistrict = "중구" | "동구" | "서구" | "남구" | "북구" | "수성구" | "달서구";

export type DaejeonDistrict = "동구" | "중구" | "서구" | "유성구" | "대덕구";

export type GwangjuDistrict = "동구" | "서구" | "남구" | "북구" | "광산구";

export type UlsanDistrict = "중구" | "남구" | "동구" | "북구" | "울주군";

export type SejongDistrict = "세종";

export type GyeonggiDistrict =
  | "수원시"
  | "성남시"
  | "용인시"
  | "안양시"
  | "안산시"
  | "과천시"
  | "광명시"
  | "군포시"
  | "부천시"
  | "시흥시"
  | "오산시"
  | "이천시"
  | "파주시"
  | "안성시"
  | "김포시"
  | "화성시"
  | "광주시"
  | "양주시"
  | "포천시"
  | "여주시"
  | "연천군"
  | "가평군"
  | "양평군";

export type GangwonDistrict =
  | "춘천시"
  | "원주시"
  | "강릉시"
  | "동해시"
  | "태백시"
  | "속초시"
  | "삼척시"
  | "홍천군"
  | "횡성군"
  | "영월군"
  | "평창군"
  | "정선군"
  | "철원군"
  | "화천군"
  | "양구군"
  | "인제군"
  | "고성군"
  | "양양군";

export type ChungbukDistrict =
  | "청주시"
  | "충주시"
  | "제천시"
  | "보은군"
  | "옥천군"
  | "영동군"
  | "진천군"
  | "괴산군"
  | "음성군"
  | "단양군";

export type ChungnamDistrict =
  | "천안시"
  | "공주시"
  | "보령시"
  | "아산시"
  | "서산시"
  | "논산시"
  | "계룡시"
  | "당진시"
  | "금산군"
  | "부여군"
  | "서천군"
  | "청양군"
  | "홍성군"
  | "예산군"
  | "태안군";

export type JeonbukDistrict =
  | "전주시"
  | "군산시"
  | "익산시"
  | "정읍시"
  | "남원시"
  | "김제시"
  | "완주군"
  | "진안군"
  | "무주군"
  | "장수군"
  | "임실군"
  | "순창군"
  | "고창군"
  | "부안군";

export type JeonnamDistrict =
  | "목포시"
  | "여수시"
  | "순천시"
  | "나주시"
  | "광양시"
  | "담양군"
  | "곡성군"
  | "구례군"
  | "고흥군"
  | "보성군"
  | "화순군"
  | "장흥군"
  | "강진군"
  | "해남군"
  | "영암군"
  | "무안군"
  | "함평군"
  | "영광군"
  | "장성군"
  | "완도군"
  | "진도군"
  | "신안군";

export type GyeongbukDistrict =
  | "포항시"
  | "경주시"
  | "김천시"
  | "안동시"
  | "구미시"
  | "영주시"
  | "영천시"
  | "상주시"
  | "문경시"
  | "경산시"
  | "군위군"
  | "의성군"
  | "청송군"
  | "영양군"
  | "영덕군"
  | "청도군"
  | "고령군"
  | "성주군"
  | "칠곡군";

export type GyeongnamDistrict =
  | "창원시"
  | "김해시"
  | "양산시"
  | "진주시"
  | "거제시"
  | "통영시"
  | "사천시"
  | "밀양시"
  | "함안군"
  | "거창군"
  | "합천군"
  | "남해군"
  | "하동군"
  | "산청군"
  | "함양군"
  | "거문도군"
  | "고성군"
  | "남해군";

export type JejuDistrict = "제주시" | "서귀포시";

export enum CityName {
  Seoul = "서울특별시",
  Busan = "부산광역시",
  Incheon = "인천광역시",
  Daegu = "대구광역시",
  Daejeon = "대전광역시",
  Gwangju = "광주광역시",
  Ulsan = "울산광역시",
  Sejong = "세종특별자치시",
  Gyeonggi = "경기도",
  Gangwon = "강원도",
  Chungbuk = "충청북도",
  Chungnam = "충청남도",
  Jeonbuk = "전라북도",
  Jeonnam = "전라남도",
  Gyeongbuk = "경상북도",
  Gyeongnam = "경상남도",
  Jeju = "제주특별자치도"
}

export interface City {
  name: CityName;
}

export interface District<T> {
  name: T[];
  city_name: string;
}
