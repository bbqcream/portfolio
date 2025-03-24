import React from "react";

const Stacks = () => {
    return (
        <div className="bg-white h-[100vh] relative">
            <div className="items-center flex w-[100%] justify-center flex-col py-15">
                <div className="text-6xl font-bold flex items-center flex-col py-15 gap-10">
                    STACKS
                    <div className="bg-black w-20 h-1 " />
                </div>
                <div className="flex">
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" />
                    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
                </div>
                <div className="flex">
                    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white" />
                    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" />
                </div>
                <div className="flex">
                    <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
                    <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
                    <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
                </div>
                <div className="w-[100%] text-center text-2xl font-medium pt-10">
                    <span className="font-bold">FRONT-END</span>을 집중적으로
                    공부했으며,
                    <br />
                    <span className="font-bold">DESIGN</span>을 부스택으로 두고
                    있습니다.
                </div>
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=bbqcream"
                    className="mt-6"
                />
            </div>
        </div>
    );
};

export default Stacks;
