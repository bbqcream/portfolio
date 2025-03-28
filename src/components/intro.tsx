import React from "react";

const Intro = () => {
    return (
        <div className="min-h-[100vh] min-w-[100vw] overflow-hidden bg-black relative text-white">
            <div className="nav">
                <div>Front-end</div>
                <div>PORTFOLIO</div>
                <div>Kim Seonghan</div>
            </div>
            <img className="circle" src="circle.svg" draggable="false" />
            <div className="absolute top-[40%] left-[15%]">
                <div className="introText">
                    꾸준히 <span className="font-bold">노력</span>하며
                    <br />
                    <span className="font-bold">성장</span>하는 개발자
                    <br />
                    김성한입니다.
                </div>
            </div>
            <img className="plus" src="plus.svg " draggable="false" />
        </div>
    );
};

export default Intro;
