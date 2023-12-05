import peek from "../assets/topPeekI.avif";
import gallery from "../assets/gallery.webp";
import calendar from "../assets/calendar.webp";
import kanban from "../assets/kanban.webp";
import table from "../assets/table.webp";
import timeline from "../assets/timeline.webp";
import list from "../assets/list.webp";
import mix from "../assets/mix.png";
import createLabel from "../assets/customize-info.webp";
import buildPage from "../assets/build-any-page-communicate-any-idea.webp";
import visible from "../assets/visibility.png";
import art from "../assets/paint.png";
import openquote from "../assets/quote.png";
import closequote from "../assets/double-quotes.png";
import fire from "../assets/match-group.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation, Autoplay, Pagination, Virtual } from "swiper/modules";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Blocks = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-[3rem]">
        <img src={peek} />
        <h1 className="text-[2.81rem] font-inter font-bold">
          Powerful building blocks
        </h1>
      </div>

      <div className="flex items-center justify-center">

    
      <div className="bg-[#f6f5f4]  rounded-[12px]  p-[24px] w-[1080px]">
        <div className="">

        <img src={mix} width={22} />
        <p className="font-bold text-[1.125rem] font-inter mt-[15px]">
          Visualize, filter & sort any way you want
        </p>
        <p className="text-[1rem] font-inter mb-[36px]">
          Show only tasks assigned to you, or items marked as urgent. Break
          <br />
          down any project in the way that’s most helpful to you.
        </p>
        <div className="flex items-center justify-center"></div>

        <div className="w-[1080x]">
          <Swiper
            id="swiper"
            virtual
            slidesPerView={1}
            direction={"horizontal"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img src={kanban} width={954} height={675} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={table} width={954} height={675} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={timeline} width={954} height={675} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={calendar} width={954} height={675} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={gallery} width={954} height={675} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={list} width={954} height={675} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex items-center justify-center mt-[21px]">
          <button className="mx-2 py-[0.2rem] px-[0.6rem] border-[1px] rounded-[0.5rem] font-inter text-[0.81rem]">
            Board
          </button>
          <button className="mx-2 py-[0.2rem] px-[0.6rem] border-[1px] rounded-[0.5rem] font-inter text-[0.81rem]">
            Table
          </button>
          <button className="mx-2 py-[0.2rem] px-[0.6rem] border-[1px] rounded-[0.5rem] font-inter text-[0.81rem]">
            Timeline
          </button>
          <button className="mx-2 py-[0.2rem] px-[0.6rem] border-[1px] rounded-[0.5rem] font-inter text-[0.81rem]">
            Calendar
          </button>
          <button className="mx-2 py-[0.2rem] px-[0.6rem] border-[1px] rounded-[0.5rem] font-inter text-[0.81rem]">
            Gallery
          </button>
          <button className="mx-2 py-[0.2rem] px-[0.6rem] border-[1px] rounded-[0.5rem] font-inter text-[0.81rem]">
            List
          </button>
        </div>
        </div>
        </div>
       
      </div>

      <div className="flex items-center justify-center mt-[2rem] mx-[2rem]">
        <div className="bg-[#f6f5f4] rounded-[12px] p-[24px]">
          <div>
            <img src={visible} />
            <p className="font-inter text-[1.125rem] font-bold mt-[10px]">
              Customize the info you track
            </p>
            <p className="font-inter text-[1rem] font-normal">
              Create your own labels, tags, owners, and more, so ev
              <br />
              eryone has context and everything stays organized.
            </p>
          </div>
          <img src={createLabel} width={464} height={360} />
        </div>

        <div className="bg-[#f6f5f4] mx-8 rounded-[12px] p-[24px]">
          <div>
            <img src={art} />
            <p className="font-inter text-[1.125rem] font-bold mt-[10px]">
              Build any page, communicate any idea
            </p>
            <p className="font-inter text-[1rem] font-normal">
              Everything is drag and drop in Notion — images, tog
              <br />
              gles, to-do’s, even embedded databases.
            </p>
          </div>

          <img src={buildPage} width={464} height={360} />
        </div>
      </div>

      <div className="flex items-start justify-center mt-[5rem]">
        <div>
          <h2 className="font-medium font-hedvig text-[30px] text-center">
            <img src={openquote} width={16} className="mb-5 inline" />
            Notion adapts to your needs. It’s as
          </h2>

          <h2 className="font-medium font-hedvig text-[30px] text-center ">
            minimal or as powerful as you need it to be.
            <img src={closequote} width={16} className="inline mb-4" />
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[11px]">
        <img src={fire} width={33} height={36} className="mr-3" />
        <div>
          <p className="text-[0.84rem] font-bold font-inter leading-[19px] tracking-[0.06px]">
            Rahim Makani
          </p>
          <p className="text-[0.84rem] font-normal font-inter leading-[19px] tracking-[0.101px]">
            {" "}
            Director of Product, Matchgroup
          </p>
        </div>
      </div>
    </>
  );
};

export default Blocks;
