import ProjectBox from "./projectBox";

const Project = () => {
    return (
        <div className="min-h-screen min-w-[100vw] bg-black relative text-white border-b-white">
            <div className="absolute top-[5%] left-[10%] right-[10%]">
                <div className="text-4xl md:text-6xl font-bold pt-15">
                    MAIN PROJECTS
                </div>
                <div className="bg-white w-15 md:w-20 h-1 my-6" />
                <div className="flex flex-wrap lg:flex-nowrap gap-4 overflow-x-visible lg:overflow-x-auto whitespace-normal lg:whitespace-nowrap pb-4">
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
                    <ProjectBox
                        title="VacPlanner"
                        detail="방학 플래너를 짜주는 프로그램입니다."
                        link="https://github.com/bbqcream/VacPlanner"
                        img="vacplanner.svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
