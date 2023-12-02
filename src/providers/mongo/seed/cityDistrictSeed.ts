import {
  City,
  District,
  BusanDistrict,
  ChungbukDistrict,
  ChungnamDistrict,
  DaeguDistrict,
  DaejeonDistrict,
  GangwonDistrict,
  GwangjuDistrict,
  GyeongbukDistrict,
  GyeonggiDistrict,
  GyeongnamDistrict,
  IncheonDistrict,
  JejuDistrict,
  JeonbukDistrict,
  JeonnamDistrict,
  SejongDistrict,
  SeoulDistrict,
  UlsanDistrict,
  CityName
} from "../../../types/seedTypes";

const seoulCity: City = { name: CityName.Seoul };
const busanCity: City = { name: CityName.Busan };
const incheonCity: City = { name: CityName.Incheon };
const daeguCity: City = { name: CityName.Daegu };
const daejeonCity: City = { name: CityName.Daejeon };
const gwangjuCity: City = { name: CityName.Gwangju };
const ulsanCity: City = { name: CityName.Ulsan };
const sejongCity: City = { name: CityName.Sejong };
const gyeonggiCity: City = { name: CityName.Gyeonggi };
const gangwonCity: City = { name: CityName.Gangwon };
const chungbukCity: City = { name: CityName.Chungbuk };
const chungnamCity: City = { name: CityName.Chungnam };
const jeonbukCity: City = { name: CityName.Jeonbuk };
const jeonnamCity: City = { name: CityName.Jeonnam };
const gyeongbukCity: City = { name: CityName.Gyeongbuk };
const gyeongnamCity: City = { name: CityName.Gyeongnam };
const jejuCity: City = { name: CityName.Jeju };

export const citys: City[] = [
  seoulCity,
  busanCity,
  incheonCity,
  daeguCity,
  daejeonCity,
  gwangjuCity,
  ulsanCity,
  sejongCity,
  gyeonggiCity,
  gangwonCity,
  chungbukCity,
  chungnamCity,
  jeonbukCity,
  jeonnamCity,
  gyeongbukCity,
  gyeongnamCity,
  jejuCity
];

const seoulDistricts: District<SeoulDistrict> = {
  city_name: CityName.Seoul,
  name: [
    "종로구",
    "중구",
    "용산구",
    "성동구",
    "광진구",
    "동대문구",
    "중랑구",
    "성북구",
    "강북구",
    "도봉구",
    "노원구",
    "은평구",
    "서대문구",
    "마포구",
    "양천구",
    "강서구",
    "구로구",
    "금천구",
    "영등포구",
    "동작구",
    "관악구",
    "서초구",
    "강남구",
    "송파구",
    "강동구"
  ]
};

const busanDistricts: District<BusanDistrict> = {
  city_name: CityName.Busan,
  name: [
    "중구",
    "서구",
    "동구",
    "영도구",
    "부산진구",
    "동래구",
    "남구",
    "북구",
    "해운대구",
    "사하구",
    "금정구",
    "강서구",
    "연제구",
    "수영구",
    "사상구"
  ]
};

const daeguDistricts: District<DaeguDistrict> = {
  city_name: CityName.Daegu,
  name: ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구"]
};

const incheonDistricts: District<IncheonDistrict> = {
  city_name: CityName.Incheon,
  name: ["중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"]
};

const gwangjuDistricts: District<GwangjuDistrict> = {
  city_name: CityName.Gwangju,
  name: ["동구", "서구", "남구", "북구", "광산구"]
};

const daejeonDistricts: District<DaejeonDistrict> = {
  city_name: CityName.Daejeon,
  name: ["동구", "중구", "서구", "유성구", "대덕구"]
};

const ulsanDistricts: District<UlsanDistrict> = {
  city_name: CityName.Ulsan,
  name: ["중구", "남구", "동구", "북구", "울주군"]
};

const sejongDistricts: District<SejongDistrict> = {
  city_name: CityName.Sejong,
  name: ["세종"]
};

const gyeonggiDistricts: District<GyeonggiDistrict> = {
  city_name: CityName.Gyeonggi,
  name: [
    "수원시",
    "성남시",
    "용인시",
    "안양시",
    "안산시",
    "과천시",
    "광명시",
    "군포시",
    "부천시",
    "시흥시",
    "오산시",
    "이천시",
    "파주시",
    "안성시",
    "김포시",
    "화성시",
    "광주시",
    "양주시",
    "포천시",
    "여주시",
    "연천군",
    "가평군",
    "양평군"
  ]
};

const gangwonDistricts: District<GangwonDistrict> = {
  city_name: CityName.Gangwon,
  name: [
    "춘천시",
    "원주시",
    "강릉시",
    "동해시",
    "태백시",
    "속초시",
    "삼척시",
    "홍천군",
    "횡성군",
    "영월군",
    "평창군",
    "정선군",
    "철원군",
    "화천군",
    "양구군",
    "인제군",
    "고성군",
    "양양군"
  ]
};

const chungbukDistricts: District<ChungbukDistrict> = {
  city_name: CityName.Chungbuk,
  name: ["청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "진천군", "괴산군", "음성군", "단양군"]
};

const chungnamDistricts: District<ChungnamDistrict> = {
  city_name: CityName.Chungnam,
  name: [
    "천안시",
    "공주시",
    "보령시",
    "아산시",
    "서산시",
    "논산시",
    "계룡시",
    "당진시",
    "금산군",
    "부여군",
    "서천군",
    "청양군",
    "홍성군",
    "예산군",
    "태안군"
  ]
};

const jeonbukDistricts: District<JeonbukDistrict> = {
  city_name: CityName.Jeonbuk,
  name: [
    "전주시",
    "군산시",
    "익산시",
    "정읍시",
    "남원시",
    "김제시",
    "완주군",
    "진안군",
    "무주군",
    "장수군",
    "임실군",
    "순창군",
    "고창군",
    "부안군"
  ]
};

const jeonnamDistricts: District<JeonnamDistrict> = {
  city_name: CityName.Jeonnam,
  name: [
    "목포시",
    "여수시",
    "순천시",
    "나주시",
    "광양시",
    "담양군",
    "곡성군",
    "구례군",
    "고흥군",
    "보성군",
    "화순군",
    "장흥군",
    "강진군",
    "해남군",
    "영암군",
    "무안군",
    "함평군",
    "영광군",
    "장성군",
    "완도군",
    "진도군",
    "신안군"
  ]
};

const gyeongbukDistricts: District<GyeongbukDistrict> = {
  city_name: CityName.Gyeongbuk,
  name: [
    "포항시",
    "경주시",
    "김천시",
    "안동시",
    "구미시",
    "영주시",
    "영천시",
    "상주시",
    "문경시",
    "경산시",
    "군위군",
    "의성군",
    "청송군",
    "영양군",
    "영덕군",
    "청도군",
    "고령군",
    "성주군",
    "칠곡군"
  ]
};

const gyeongnamDistricts: District<GyeongnamDistrict> = {
  city_name: CityName.Gyeongnam,
  name: [
    "창원시",
    "김해시",
    "양산시",
    "진주시",
    "거제시",
    "통영시",
    "사천시",
    "밀양시",
    "함안군",
    "거창군",
    "합천군",
    "남해군",
    "하동군",
    "산청군",
    "함양군",
    "거문도군",
    "고성군",
    "남해군"
  ]
};

const jejuDistricts: District<JejuDistrict> = {
  city_name: CityName.Jeju,
  name: ["제주시", "서귀포시"]
};

export const districts: District<
  | BusanDistrict
  | ChungbukDistrict
  | ChungnamDistrict
  | DaeguDistrict
  | DaejeonDistrict
  | GangwonDistrict
  | GwangjuDistrict
  | GyeongbukDistrict
  | GyeonggiDistrict
  | GyeongnamDistrict
  | IncheonDistrict
  | JejuDistrict
  | JeonbukDistrict
  | JeonnamDistrict
  | SejongDistrict
  | SeoulDistrict
  | UlsanDistrict
>[] = [
  seoulDistricts,
  busanDistricts,
  daeguDistricts,
  incheonDistricts,
  gwangjuDistricts,
  daejeonDistricts,
  ulsanDistricts,
  sejongDistricts,
  gyeonggiDistricts,
  gangwonDistricts,
  chungbukDistricts,
  chungnamDistricts,
  jeonbukDistricts,
  jeonnamDistricts,
  gyeongbukDistricts,
  gyeongnamDistricts,
  jejuDistricts
];
