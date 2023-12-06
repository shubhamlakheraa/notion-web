import introImage from "../assets/home-hero.webp";
import useResponsive from "../hooks/useResponsive";

const Intro = () => {

    const { isDesktop } = useResponsive()

  return (
    <>
      <div className="flex items-center justify-center mt-[38px]">
        <div>

            {
                !isDesktop ? 
                (
                    <div>
                        <h1 className={`text-[45px] font-inter font-bold leading-[1.06] tracking-[-0.0269em] text-center px-7`}>
                            Write, plan, share. With AI <br/>at  your side.
                        </h1>
                    </div>
                ) :
                (
                    <>
                    <div className={` text-center  `}>
            <h1 className={`text-[61px] font-bold leading-[65px] tracking-[-1.9215px]  `}>
              Write, plan, share.
            </h1>
          </div>

          <div className={`text-center`}>
            <h1 className={`text-[61px] font-bold leading-[65px] tracking-[-1.9215px]`}>
              With AI at your side.
            </h1>
          </div>
                    </>
                    
                )
            }
          

          <p className={` ${!isDesktop ? "text-center px-[3.2rem] tracking-[-0.0175em] leading-[1.25] font-medium " : "text-[#050505] "}  font-inter   mt-[12px] text-[24px]`}>
            Notion is the connected workspace where better, faster work happens.
          </p>

          <div className="text-center mt-[21px]">
            <button className="mx-5 bg-black hover:bg-[#333] text-[#ffffff] rounded-[0.3125rem] py-[4px] pr-[12px]  pl-[14px] font-medium text-[1rem] ">
              Get Notion free
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[48px]">
        <img src={introImage} width={ !isDesktop ? 343 : 640} />
      </div>
    </>
  );
};

export default Intro;
