const Contact = () => {
  return (
    <div className="bg-white min-h-[100vh] min-w-[100vw] relative">
      <div className="text-4xl md:text-6xl font-bold flex items-center flex-col py-15 gap-5 md:gap-10">
        CONTACT ME
        <div className="bg-black w-15 md:w-20 h-1" />
        <div className="boxWrap">
          <a href="https://github.com/bbqcream">
            <img
              src="github.svg"
              className="cursor-pointer transition-all duration-300 ease-in-out w-12 md:w-20 hover:shadow-lg"
              draggable="false"
            />
          </a>
          <a href="https://thunder-bream-d76.notion.site/efaafc4c2f0243048b7cf2b29e54ed24?pvs=4">
            <img
              src="notion.svg"
              draggable="false"
              className="cursor-pointer transition-all duration-300 ease-in-out w-12 md:w-20 hover:shadow-lg"
            />
          </a>
          <a href="https://www.instagram.com/sh_.xn/">
            <img
              src="instagram.svg"
              draggable="false"
              className="cursor-pointer transition-all duration-300 ease-in-out w-12 md:w-20 hover:shadow-lg"
            />
          </a>
          <a href="mailto:imground11@gmail.com" target="_blank">
            <img
              src="gmail.svg"
              draggable="false"
              className="cursor-pointer transition-all duration-300 ease-in-out w-12 md:w-20 hover:shadow-lg "
            />
          </a>
        </div>
      </div>
      <div className="w-[100%] flex justify-center text-center flex-col items-center gap-5 px-5 md:p-0 text-1xl md:text-2xl font-medium">
        <div className="bg-black w-3 h-3 md:w-5 md:h-5 border rounded-full" />
        <div className="bg-black w-3 h-3 md:w-5 md:h-5 border rounded-full" />
        <div className="bg-black w-3 h-3 md:w-5 md:h-5 border rounded-full" />
        <div className="pt-10">
          <span className="font-bold">언제나 끈질긴 노력</span>
          으로 결과물을 완성해 내는 개발자입니다.
        </div>
        <div>
          현재 <span className="font-bold">대구소프트웨어마이스터고등학교</span>
          에서 활동하고 있고 <span className="font-bold">창체동아리 ALT</span>
          에서 활동 중입니다.
        </div>
        <div className="px-10">
          <span className="font-bold">언제나 프로젝트 마감 기한</span>을 지키고{" "}
          <span className="font-bold">완성도를 최대로</span> 끌어올려{" "}
          <span className="font-bold">개발에 차질이 생기지 않도록</span> 하는
          것이 목표입니다.
        </div>
      </div>
    </div>
  );
};

export default Contact;
