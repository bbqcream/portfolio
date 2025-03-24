import React from "react";

const HistoryOne = () => {
    return (
        <div className="w-screen h-[100vh] bg-black relative text-white border-b-white">
            <img className="absolute top-[5%] left-[5%]" src="angle.svg" />
            <img
                className="absolute top-[5%] right-[5%] transform rotate-90"
                src="angle.svg"
            />
            <div className="absolute top-[5%] left-[10%]">
                <div className="text-7xl font-bold pt-15">ACTICITIES</div>
                <div className="bg-white w-20 h-1 mt-2" />
                <div className="text-3xl font-semibold py-4">2024</div>
                <div className="text-1xl font-light flex flex-col gap-1">
                    <div>2024.3.4 | 대구소프트웨어마이스터고등학교 입학</div>
                    <div>2024.3.14 ~ 2025.2.11 | 교내 동아리 활동 (DUCAMI)</div>
                    <div>2024.3 ~ | 교내 동아리 활동 (8bit)</div>
                    <div>
                        2024.5.5 | DUCAMI 동아리에서 대구창의융합교육원 봉사
                        활동
                    </div>
                    <div>
                        2024.6 ~ 2024.11 | 교내 프로젝트 활동 (다솜, Design)
                    </div>
                    <div>
                        2024.6.15 ~ 2024.9.6 | 8bit 동아리에서 프로젝트 활동
                        (T-List, Design)
                    </div>
                    <div>
                        2024.7.6 | DUCAMI 동아리에서 아두이노 교육 봉사 활동
                    </div>
                    <div>
                        2024.7.13 | DUCAMI 동아리에서 App inventor 교육 봉사
                        활동
                    </div>
                    <div>
                        2024.7.16 ~ 2024.7.18 | 교내 해커톤 참가 (온새미로,
                        Design)
                    </div>
                    <div>
                        2024.8.9 ~ | 8bit 동아리 프로젝트 활동 (삑, Front-end,
                        Design)
                    </div>
                    <div>
                        2024.8 ~ 2024.12 | DUCAMI 동아리에서 프로젝트 활동
                        (빌리두, Front-end)
                    </div>
                    <div>
                        2024.8.20 ~ 2024.12.26 | 교내 나르샤 프로젝트 참가
                        (갈랜더, Front-end, Design) 🏆
                    </div>
                    <div>
                        2024.9.7 | DUCAMI 동아리에서 App inventor 교육 봉사 활동
                    </div>
                    <div>
                        2024.9.8 | DUCAMI 동아리에서 해달에듀코딩학원과
                        마인크래프트 교육 봉사 활동
                    </div>
                    <div>
                        2024.9. ~ 2025.3 | 외부 협업 프로젝트 (DEF, Front-end,
                        Design)
                    </div>
                    <div>2024.9.11 | 교내 학교 홍보 박람회 활동</div>
                    <div>
                        2024.9.28 | DUCAMI 동아리에서 마이크로비트 &
                        마인크래프트 교육 활동
                    </div>
                    <div>
                        2024.10.21 ~ 2024.11.7 | 신한 AI 아이디어톤 틴즈 참가
                    </div>
                    <div>
                        2024.12.9 ~ 2025.1.10 | 연암공과대학교 AI 해커톤 참가
                        (안심터치, Front-end, Design)
                    </div>
                </div>
                <br className="bg-gray-50 h-1 w-[100%] border-gray-50" />
            </div>
        </div>
    );
};

export default HistoryOne;
