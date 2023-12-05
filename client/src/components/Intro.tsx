import introImage from "../assets/home-hero.webp";
const Intro = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-[38px]">
        <div>
          <div className="text-center">
            <h1 className="text-[61px] font-bold leading-[65px] tracking-[-1.9215px]">
              Write, plan, share.
            </h1>
          </div>

          <div className="text-center">
            <h1 className="text-[61px] font-bold leading-[65px] tracking-[-1.9215px]">
              With AI at your side.
            </h1>
          </div>

          <p className="text-[#050505] mt-[12px] text-[24px]  ">
            Notion is the connected workspace where better, faster work happens.
          </p>

          <div className="text-center mt-[21px]">
            <button className="mx-5 bg-black hover:bg-[#333] text-[#ffffff] rounded-[0.3125rem] px-[0.687rem] py-[0.25rem] font-medium text-[0.8rem]">
              Get Notion free
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[48px]">
        <img src={introImage} width={640} />
      </div>
    </>
  );
};

export default Intro;
