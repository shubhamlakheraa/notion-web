import notionLogo from "../assets/notion-logo.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <>
      <hr></hr>

      <div className="mx-[34.5px] px-[125px] py-[80px] flex items-start gap-20">
        <div>
          <div className="flex items-center font-semibold font-inter ">
            <img src={notionLogo} width={30} className="mr-1" />
            Notion
          </div>

          <div className="flex items-center mt-[30px]">
            <img src={insta} width={30} className="opacity-[60%] p-[6px]" />
            <img src={twitter} width={30} className="opacity-[60%] p-[6px]" />
            <img src={linkedin} width={30} className="opacity-[60%] p-[6px]" />
            <img src={facebook} width={30} className="opacity-[60%] p-[6px]" />
            <img src={youtube} width={30} className="opacity-[60%] p-[6px]" />
          </div>

          <div className="border-[1px] text-[1rem] font-inter font-semibold rounded-[0.31rem] w-[120px] mt-[24px]">
            <i className="bi bi-globe px-[6px]"></i>
            English
            <i className="bi bi-chevron-down px-[6px]  "></i>
          </div>
        </div>

        <div className="grid grid-cols-3   gap-x-[24px] ">
          <div>
            <p className="font-inter font-bold text-[0.937rem]">Product</p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Wikis
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Projects
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Docs
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Notion AI
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              What's New
            </p>
          </div>

          <div>
            <p className="font-inter font-bold text-[0.937rem]">Download</p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              ios & Android
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Mac & Windows
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Web Clipper
            </p>
          </div>

          <div>
            <p className="font-inter font-bold text-[0.937rem]">Get started</p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Switch from Confluence
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Switch from Asana
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Switch from Evernote
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Compare vs Monday
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Compare vs Clickup
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Compare vs Jira
            </p>
          </div>

          <div>
            <p className="font-inter font-bold text-[0.937rem]">Solutions</p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Enterprise
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Small business
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Personal use{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Remote work{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Startups
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Nonprofits
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Education
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Product{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Design{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Engineering
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Managers
            </p>
          </div>

          <div>
            <p className="font-inter font-bold text-[0.937rem]">Build</p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Integrations
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Templates
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              API docs
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Guides & tutorials
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Hire a consultant
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] my-[9px] hover:text-[#0a85d1] hover:underline cursor-pointer">
              Become an affiliate
            </p>
          </div>

          <div>
            <p className="font-inter font-bold text-[0.937rem]">Resources</p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              Pricing
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              About us{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              Careers{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              Media kit{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              Email us{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              Security
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              Cookie settings
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              Terms & privacy{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              CaliforniaPrivacy Notice{" "}
            </p>
            <p className="font-inter font-normal text-[0.937rem] opacity-[60%] hover:text-[#0a85d1] hover:underline cursor-pointer my-[9px]">
              Status
            </p>
          </div>
        </div>

        <div className=" ">
          <p className="font-inter font-bold text-[0.937rem]">Learn</p>
          <p className="font-inter font-normal text-[0.937rem] hover:text-[#0a85d1] hover:underline cursor-pointer opacity-[60%] my-[9px]">
            Customer stories
          </p>
          <p className="font-inter font-normal text-[0.937rem] hover:text-[#0a85d1] hover:underline cursor-pointer opacity-[60%] my-[9px]">
            Help center
          </p>
          <p className="font-inter font-normal text-[0.937rem] hover:text-[#0a85d1] hover:underline cursor-pointer opacity-[60%] my-[9px]">
            Webinars
          </p>
          <p className="font-inter font-normal text-[0.937rem] hover:text-[#0a85d1] hover:underline cursor-pointer opacity-[60%] my-[9px]">
            Blog
          </p>
          <p className="font-inter font-normal text-[0.937rem] hover:text-[#0a85d1] hover:underline cursor-pointer opacity-[60%] my-[9px]">
            Community
          </p>
        </div>
      </div>

      <p className="font-inter text-[13.5px] text-center ">
        Do not sell or share my info
      </p>
      <p className="opacity-[60%] font-inter text-center text-[13.5px]">
        © 2023 Shubham Lakhera
      </p>
    </>
  );
};

export default Footer;
