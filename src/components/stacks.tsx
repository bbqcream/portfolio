import React from "react";

const Stacks = () => {
  return (
    <div className="bg-white min-h-[100vh] min-w-[100vw]  relative">
      <div className="items-center flex w-[100%] justify-center flex-col py-15">
        <div className="text-4xl md:text-6xl font-bold flex items-center flex-col py-15 gap-10">
          MAIN STACKS
          <div className="bg-black w-15 md:w-20 h-1" />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-3">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="react.png" className="w-20 md:w-30" />
            <img src="ts.png" className="w-20 md:w-30" />
            <img src="compose.png" className="w-20 md:w-30" alt="왜 안나와" />
          </div>
          <div className="flex items-center gap-1 md:gap-3">
            <img src="styled.png" className="w-20 md:w-30" />
            <img src="tw.png" className="w-20 md:w-30" />
            <img src="next.png" className="w-20 md:w-30" />
          </div>
        </div>
        <div className="w-[100%] text-center text-1xl md:text-2xl font-medium pt-10">
          <span className="font-bold">FRONT-END</span>를 집중적으로 공부했으며,
          <br />
          <span className="font-bold">DESIGN</span>을 부스택으로 두고 있습니다.
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
