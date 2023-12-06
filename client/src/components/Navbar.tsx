import notionLogo from "../assets/notion-logo.png";
import arrowDown from "../assets/arrow-down.png";
import useResponsive from "../hooks/useResponsive";
import navLogo from "../assets/justified-text.png"

const Navbar = () => {

    const { isDesktop } = useResponsive()

  return (
    <>
      <div
        className={` ${
          !isDesktop ? "hidden" : "text-center py-5 bg-[#f6f5f4] font-inter"
        }  `}
      >
        <span
          className={`pt-[1px] pr-[7px] pb-[2px] pl-[8px] rounded-[100px] bg-[#8029B3] text-white mr-2  `}
        >
          New
        </span>
        Introducing Q&A – a new way to get answers in Notion.
      </div>

      <div className="flex items-center justify-between mt-5 px-5">
        {!isDesktop ? (
          <>
            <div className="flex items-center font-bold">
              <img src={notionLogo} width={32} className="mr-1" />
              Notion
            </div>
            <img src={navLogo} />
          </>
        ) : (
          <>
            <div className="flex items-center font-inter font-bold">
              <img src={notionLogo} width={32} className="mr-1" />
              Notion
              <div className="flex items-center">
                <div className="flex items-center pl-[10px] pr-[24px] text-[0.9375rem] font-medium ">
                  Product
                  <img
                    src={arrowDown}
                    width={12}
                    className="mt-[4px] ml-[3px]"
                  />
                </div>

                <div className="flex items-center pl-[10px] pr-[24px] text-[0.9375rem] font-medium">
                  Download
                  <img
                    src={arrowDown}
                    width={12}
                    className="mt-[4px] ml-[3px]"
                  />
                </div>

                <div className="flex items-center pl-[10px] pr-[24px] text-[0.9375rem] font-medium">
                  Solutions
                  <img
                    src={arrowDown}
                    width={12}
                    className="mt-[4px] ml-[3px]"
                  />
                </div>

                <div className="flex items-center pl-[10px] pr-[24px] text-[0.9375rem] font-medium">
                  Resources
                  <img
                    src={arrowDown}
                    width={12}
                    className="mt-[4px] ml-[3px]"
                  />
                </div>

                <div className="flex items-center pl-[10px] pr-[24px] text-[0.9375rem] font-medium">
                  Pricing
                  <img
                    src={arrowDown}
                    width={12}
                    className="mt-[4px] ml-[3px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="mx-5 font-medium text-[0.937rem] text-[#050505] rounded-[0.3125rem] hover:bg-[#f6f5f4] py-[2px] px-[7px]">
                Request a demo
              </button>
              <div className="w-[1px] h-[20px] bg-[#0000001a] ml-[10px]"></div>
              <button className="mx-5 font-medium text-[0.937rem] text-[#050505] rounded-[0.3125rem] hover:bg-[#f6f5f4] py-[2px] px-[7px] ">
                Log in
              </button>
              <button className="mx-5 bg-black hover:bg-[#333] text-[#ffffff] rounded-[0.3125rem] px-[0.687rem] py-[0.25rem] font-medium text-[0.8rem]">
                Get Notion free
              </button>
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
