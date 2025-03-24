import React from "react";

const Intro = () => {
    return (
        <div className="w-screen h-screen bg-black relative text-white">
            <div className="absolute top-[5%] w-[100%] text-1xl font-light flex justify-between px-10">
                <div>Front-end</div>
                <div>Design</div>
                <div>Kim Seonghan</div>
            </div>
            <img className="absolute right-0" src="circle.svg " />
            <div className="absolute top-[40%] left-[15%]">
                <div className=" text-6xl leading-18 font-light">
                    꾸준히 <span className="font-bold">노력</span>하며
                    <br />
                    <span className="font-bold">성장</span>하는 개발자
                    <br />
                    김성한입니다.
                </div>
            </div>
            <img className="absolute bottom-[10%] left-[5%]" src="plus.svg " />
        </div>
    );
};

export default Intro;
