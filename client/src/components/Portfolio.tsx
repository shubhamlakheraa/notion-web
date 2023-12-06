import uber from "../assets/uber.png";
import plaid from "../assets/plaid.png";
import toyota from "../assets/toyota.png";
import snowflake from "../assets/snowflake.png";
import headspace from "../assets/headspace.png";
import angelist from "../assets/angel-list.png";
import robinhood from "../assets/robinhood_logo.png";
import figma from "../assets/figma-logo.png";
import pixar from "../assets/pixar.png";
import doordash from "../assets/doordash.png";
import nike from "../assets/nike.png";
import amazon from "../assets/amazon.png";
import pinterest from "../assets/pinterest.png";
import gehc from "../assets/gehc.png";
import useResponsive from "../hooks/useResponsive";

const Portfolio = () => {

    const { isDesktop } = useResponsive()
  return (
    <>
      <div className="mt-[4rem] flex items-center justify-center">
        <div>
          <h1 className={` ${!isDesktop ? "text-[36px] text-center leading-[1.111] " : "text-[2.81rem]"}   font-bold `}>
            Millions run on Notion every day
          </h1>
          <p className={` ${!isDesktop ? "leading-[1.4375] font-inter px-3 mt-2" : ""}  text-center`}>
            Powering the world’s best teams, from next-generation startups
              {!isDesktop ? " " : <br /> }
             to established enterprises.
          </p>
          <div className="flex items-center justify-center text-[#0a85d1] hover:text-[#076097] text-[16px] font-medium hover:underline hover:decoration-solid mb-5 cursor-pointer mt-5">
        Read customers stories
        <i className="bi bi-arrow-right ml-1"></i>
      </div>
        </div>
      </div>

      {
        !isDesktop ? 
        (
            <div className="flex flex-row flex-wrap items-center justify-center gap-5 px-5">
                <img width={87} height={55} src={figma} />
                <img width={109} height={55} src={pixar} />
                <img width={135} height={55} src={doordash} />
                <img width={83} height={55} src={nike} />
                <img width={90} height={55} src={amazon} />
                <img width={98} height={55} src={pinterest} />

                <img width={50} height={55} src={gehc} className="" />
                <img width={84} height={55} src={uber} />
                <img width={82} height={55} src={plaid} />
                <img width={96} height={55} src={toyota} />
                <img width={101} height={55} src={snowflake} />
                <img width={106} height={55} src={headspace} />
                <img width={104} height={55} src={angelist} />
                <img width={97} height={55} src={robinhood} />

            </div>

        ) :
        (
            <>
            <div className="flex items-center justify-center flex-wrap flex-row gap-x-[30px] gap-y-[40px] ">
        <img width={87} height={55} src={figma} />
        <img width={109} height={55} src={pixar} />
        <img width={135} height={55} src={doordash} />
        <img width={83} height={55} src={nike} />
        <img width={90} height={55} src={amazon} />
        <img width={98} height={55} src={pinterest} />
      </div>
      <div className="flex items-center justify-center flex-wrap flex-row gap-x-[30px] gap-y-[40px]">
        <img width={50} height={55} src={gehc} className="ml-[2rem]" />
        <img width={84} height={55} src={uber} />
        <img width={82} height={55} src={plaid} />
        <img width={96} height={55} src={toyota} />
        <img width={101} height={55} src={snowflake} />
        <img width={106} height={55} src={headspace} />
      </div>

      <div className="flex items-center justify-center flex-wrap flex-row gap-x-[30px] gap-y-[40px]  ">
        <img width={104} height={55} src={angelist} />
        <img width={97} height={55} src={robinhood} />
      </div>
            </>
        )
      }

      
    </>
  );
};

export default Portfolio;
