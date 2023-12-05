import peek from "../assets/topPeekJ.avif";
import home from "../assets/home.png";
import flag from "../assets/flag.png";
import check from "../assets/check.png";
import notes from "../assets/notes.png";
import plane from "../assets/plane.png";
import planner from "../assets/planner.png";
import route from "../assets/route.png";
import company from "../assets/company-wiki-template.png";
import parade from "../assets/notion-parade.png";

const Templates = () => {
  return (
    <>
      <div className=" flex items-start justify-center mt-[3rem]">
        <div>
          <h1 className="text-[2.81rem] font-inter font-bold text-center mt-[3rem] mb-3">
            Endless ways to use it
          </h1>
          <div className="flex items-center justify-center text-[#0a85d1] hover:text-[#076097] text-[16px] font-medium hover:underline hover:decoration-solid mb-5 cursor-pointer mt-3">
            Browse all templates
            <i className="bi bi-arrow-right ml-1"></i>
          </div>
        </div>
        <img src={peek} className="absolute left-[70%]" />
      </div>

      <div>
        <div className="flex items-start justify-center gap-10 ">
          <div className="bg-[#f6f5f4] rounded-[12px] p-[24px] w-[500px] h-[650px]">
            <img src={home} />
            <p className="font-bold font-inter text-[18px] mt-[15px]">
              Company wiki{" "}
            </p>
            <div className=" text-[#0a85d1] hover:text-[#076097] text-[18px] font-normal hover:underline hover:decoration-solid mb-5 cursor-pointer mt-[31px]">
              Get template
              <i className="bi bi-arrow-right ml-1"></i>
            </div>

            <div className="mt-[5rem]">
              <img src={company} />
            </div>
          </div>

          <div className="grid grid-cols-2  w-[550px] ">
            <div className="bg-[#f6f5f4] rounded-[12px] p-[24px]  font-bold w-[234px]">
              <div className="flex items-center">
                <img src={flag} className="mb-2" />
              </div>
              Product roadmap
              <div className=" text-[#0a85d1] hover:text-[#076097] text-[18px] font-normal hover:underline hover:decoration-solid mb-5 cursor-pointer mt-[31px]">
                Get template
                <i className="bi bi-arrow-right ml-1"></i>
              </div>
            </div>

            <div className="bg-[#f6f5f4] rounded-[12px] p-[24px]  font-bold w-[234px]">
              <div className="flex items-center">
                <img src={check} className="mb-2" />
              </div>
              OKRs
              <div className=" text-[#0a85d1] hover:text-[#076097] text-[18px] font-normal hover:underline hover:decoration-solid mb-5 cursor-pointer mt-[31px]">
                Get template
                <i className="bi bi-arrow-right ml-1"></i>
              </div>
            </div>

            <div className="bg-[#f6f5f4] rounded-[12px] p-[24px] my-[2rem] font-bold w-[234px]">
              <div className="flex items-center">
                <img src={notes} className="mb-2" />
              </div>
              Meeting notes
              <div className=" text-[#0a85d1] hover:text-[#076097] text-[18px] font-normal hover:underline hover:decoration-solid mb-5 cursor-pointer mt-[31px]">
                Get template
                <i className="bi bi-arrow-right ml-1"></i>
              </div>
            </div>

            <div className="bg-[#f6f5f4] rounded-[12px] p-[24px] my-[2rem] font-bold w-[234px]">
              <div className="flex items-center">
                <img src={plane} className="mb-2" />
              </div>
              Vacation planner
              <div className=" text-[#0a85d1] hover:text-[#076097] text-[18px] font-normal hover:underline hover:decoration-solid mb-5 cursor-pointer mt-[31px]">
                Get template
                <i className="bi bi-arrow-right ml-1"></i>
              </div>
            </div>

            <div className="bg-[#f6f5f4] rounded-[12px] p-[24px]  font-bold w-[234px]">
              <div className="flex items-center">
                <img src={planner} className="mb-2" />
              </div>
              Editorial calendar
              <div className=" text-[#0a85d1] hover:text-[#076097] text-[18px] font-normal hover:underline hover:decoration-solid mb-5 cursor-pointer mt-[31px]">
                Get template
                <i className="bi bi-arrow-right ml-1"></i>
              </div>
            </div>

            <div className="bg-[#f6f5f4] rounded-[12px] p-[24px]  font-bold w-[234px]">
              <div className="flex items-center">
                <img src={route} className="mb-2" />
              </div>
              Habit tracker
              <div className=" text-[#0a85d1] hover:text-[#076097] text-[18px] font-normal hover:underline hover:decoration-solid mb-5 cursor-pointer mt-[31px]">
                Get template
                <i className="bi bi-arrow-right ml-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-[2.81rem] font-inter font-bold text-center mt-[3rem] mb-3">
        Get started for free
      </h1>

      <p className="text-center text-[#121212] text-[1rem] font-normal font-inter mt-3">
        Play around with it first. Pay and add your team later.
      </p>

      <div className="flex items-center justify-center mt-[21px]">
        <button className="mx-5 bg-black hover:bg-[#333] text-[#ffffff] rounded-[0.3125rem] px-[0.687rem] py-[0.25rem] font-medium text-[0.8rem]">
          Try Notion free
        </button>
        <div className=" text-[#0a85d1] hover:text-[#076097] text-[18px] font-medium hover:underline hover:decoration-solid  cursor-pointer">
          Request a demo
          <i className="bi bi-arrow-right ml-1"></i>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[1rem]">
        <img src={parade} />
      </div>
    </>
  );
};

export default Templates;
