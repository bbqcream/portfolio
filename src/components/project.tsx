import React from "react";
import ProjectBox from "./projectBox";

const Project = () => {
  return (
    <div className="min-h-[100vh] min-w-[100vw] bg-black relative text-white border-b-white">
      <div className="absolute top-[5%] left-[10%]">
        <div className="text-4xl md:text-6xl font-bold pt-15">
          MAIN PROJECTS
        </div>
        <div className="bg-white w-15 md:w-20 h-1 my-6" />
        <div className=" flex flex-col sm:flex-row sm:gap-3 gap-3">
          <ProjectBox
            title="Legacy"
            detail="게임과 함께하는 우리 문화와 역사"
            link="https://github.com/TeamDetail"
            img="legacy.svg"
          />
          <ProjectBox
            title="삑"
            detail="학교의 출석체크를 관리하는 프로그램입니다."
            link="https://github.com/8bit-beep"
            img="beep.svg"
          />
          <ProjectBox
            title="LET"
            detail="학생들의 잔반을 관리하는 프로그램입니다."
            link="https://github.com/team-4LT"
            img="LET.svg"
          />
          <ProjectBox
            title="갈랜더"
            detail="IT 대회 정보를 보여주는 프로그램입니다."
            link="https://github.com/T2AM-COOK/Galendar-Web"
            img="Gal.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
