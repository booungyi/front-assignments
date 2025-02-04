"use client"; // 클라이언트 컴포넌트로 설정

import Header from "@/components/header";
import Snowfall from "react-snowfall"; // Snowfall 라이브러리 import

// Profile 타입 정의
interface Profile {
  imageSrc: string;
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  job: string;
  famousLines: string[];
}

export default function Assignment2() {
  const profileData: Profile = {
    imageSrc:
      "https://cdn.eyesmag.com/content/uploads/posts/2024/10/24/2-ec197d3a-a71a-41e9-a962-5631a1a69dcf.png",
    name: "핑구",
    age: 295,
    nationality: "South Pole",
    height: 80,
    weight: 151,
    job: "Full Stack Developer",
    famousLines: ["펭귄이 하늘에 서겠다.", "기술은 인간을 위합니다."],
  };

  return (
    <>
      {/* 상단 헤더 */}
      <Header title="명함" hasBack={true} />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#E0F7FA] to-[#B3E5FC] relative overflow-hidden">
        {/* 눈 내리기 효과 */}
        <Snowfall />
        <ProfileCard {...profileData} />
      </div>
    </>
  );
}

// 남극 테마의 프로필 카드
function ProfileCard({
  imageSrc,
  name,
  age,
  nationality,
  height,
  weight,
  job,
  famousLines,
}: Profile) {
  return (
    <div className="relative max-w-sm w-full p-8 rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#E0F7FA] shadow-xl border-[1px] border-[#80DEEA] transform group transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      {/* 외곽 테두리 효과 */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-b from-[#B3E5FC] to-[#80DEEA] blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

      {/* 카드 내용 */}
      <div className="relative z-10">
        {/* 프로필 이미지 */}
        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-[4px] border-[#80DEEA] shadow-lg transition-transform group-hover:rotate-3 group-hover:scale-110 duration-500">
            <img
              src={imageSrc}
              alt={`${name}의 프로필`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 이름 및 직업 */}
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold tracking-wider text-[#37474F] group-hover:text-[#354259] transition-colors">
            {name}
          </h2>
          <p className="text-sm text-[#607D8B]">{job}</p>
        </div>

        {/* 메타 정보 */}
        <div className="mt-6 bg-[#E6F7FB] rounded-xl p-4 shadow-inner">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-[#607D8B]">나이</p>
              <p className="font-medium text-[#37474F]">{age}세</p>
            </div>
            <div>
              <p className="text-sm text-[#607D8B]">국적</p>
              <p className="font-medium text-[#37474F]">{nationality}</p>
            </div>
            <div>
              <p className="text-sm text-[#607D8B]">키</p>
              <p className="font-medium text-[#37474F]">{height}cm</p>
            </div>
            <div>
              <p className="text-sm text-[#607D8B]">몸무게</p>
              <p className="font-medium text-[#37474F]">{weight}kg</p>
            </div>
          </div>
        </div>

        {/* 명대사 섹션 */}
        <div className="mt-6">
          <h3 className="text-md font-semibold text-[#607D8B] mb-3">명대사</h3>
          <ul className="space-y-3">
            {famousLines.map((line, index) => (
              <li
                key={index}
                className="px-4 py-2 bg-[#E6F7FB] border-l-4 border-[#80DEEA] text-[#37474F] italic shadow rounded-lg transform transition-transform hover:translate-x-1"
              >
                &quot;{line}&quot;
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
