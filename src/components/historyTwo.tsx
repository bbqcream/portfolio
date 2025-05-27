const HistoryTwo = () => {
    return (
        <div className="min-h-[100vh] min-w-[100vw]  bg-black relative text-white">
            <div className="absolute top-[2%] right-[10%] text-right">
                <div className="text-2xl md:text-3xl font-semibold pb-4">
                    2025
                </div>
                <div className="text-[0.75rem] md:text-[1rem] font-light flex flex-col gap-2 md:gap-4">
                    <div>
                        2025.2.8 ~ 2025.2.9 | 제 29회 앱잼 참가 (감정콩,
                        Front-end){" "}
                    </div>
                    <div>
                        2025.2. ~ | 교내 동아리 활동 (ALT, Front-end, Design)
                    </div>
                    <div>
                        2025.3 ~ | ALT 동아리에서 프로젝트 활동 (LET, Front-end,
                        Design)
                    </div>
                    <div>
                        2025.3. | 교내 나르샤 프로젝트 참가 (App, Design, Sound
                        Design)
                    </div>
                </div>
            </div>
            <img
                className="absolute bottom-[5%] right-[5%] transform rotate-180  md:w-20 w-10"
                src="angle.svg"
            />
            <img
                className="absolute bottom-[5%] left-[5%] transform rotate-270  md:w-20 w-10"
                src="angle.svg"
            />
        </div>
    );
};

export default HistoryTwo;
