import tools from "../assets/tools-before-notion.webp";
import line from "../assets/tools-strikethrough.webp";
import illustration from "../assets/giant-pencil-illustration.webp";
import metalab from "../assets/metalab.webp";
import openquote from "../assets/quote.png";
import closequote from "../assets/double-quotes.png";

const Tools = () => {
  return (
    <>
      <div className="mt-[5rem] flex items-center justify-center">
        <h1 className="text-[2.81rem] font-bold text-center ml-[13rem] font-inter">
          Consolidate tools.
          <br />
          Cut Costs.
        </h1>
        <img src={illustration} />
      </div>

      <div className="flex items-center justify-center ">
        <div className="relative inline-block">
          <img src={tools} width={613} height={50} className="" />
          <div className="absolute top-[50%] mix-blend-multiply translate-y-[-60%]">
            <img src={line} className="" />
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center mt-[5rem]">
        <img src={openquote} width={16} className="mt-1" />

        <div>
          <h2 className="font-medium font-hedvig text-[30px]">
            We got rid of nearly a dozen different tools because of
          </h2>

          <h2 className="font-medium font-hedvig text-[30px] text-center ">
            what Notion does for us.
            <img src={closequote} width={16} className="inline mb-4" />
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[11px]">
        <img src={metalab} width={127} height={35} />
        <div>
          <p className="text-[0.84rem] font-bold font-inter leading-[19px] tracking-[0.06px]">
            Justin Watt
          </p>
          <p className="text-[0.84rem] font-normal font-inter leading-[19px] tracking-[0.101px]">
            {" "}
            Director of Ops & Marketing, Metalab
          </p>
        </div>
      </div>
    </>
  );
};

export default Tools;
