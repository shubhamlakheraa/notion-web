import avatars from "../assets/avatars.png";
import icons from "../assets/community-icons-V2.png";
import welcome from "../assets/welcome-to-notion.png";
import slide1 from "../assets/community-slide-01.png";
import slide2 from "../assets/community-slide-02.png";
import slide3 from "../assets/community-slide-03.png";
import slide4 from "../assets/community-slide-04.png";
import deborah from "../assets/twitter-avatar-deborah.png";
import andre from "../assets/twitter-avatar-andre.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation, Autoplay, Pagination, Virtual } from "swiper/modules";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const Community = () => {
  return (
    <>
      <h1 className="text-[2.81rem] font-inter font-bold text-center mt-[5rem] leading-[49px] tracking-[-1.21px]">
        Join a global community.
      </h1>
      <h1 className="text-[2.81rem] font-inter font-bold text-center ">
        Unleash your creativity.
      </h1>

      <p className="text-center text-[#121212] text-[1rem] font-normal font-inter mt-5">
        Our vibrant community produces content, teaches courses, and leads
        events all over <br />
        the world.
      </p>

      <div className="flex items-center justify-center text-[#0a85d1] hover:text-[#076097] text-[16px] font-medium hover:underline hover:decoration-solid mb-5 cursor-pointer mt-5">
        Learn more
        <i className="bi bi-arrow-right ml-1"></i>
      </div>
      <div className="flex items-center justify-center">
        <img src={avatars} />
      </div>

      <div className="flex items-center justify-center gap-10">
        <div className="p-[24px] rounded-[12px] bg-[#f6f5f4] w-[321px] ">
          <h3 className="font-bold text-[3.31rem] text-[#0a85d1]">1M+</h3>
          <p className="text-[0.843rem] font-medium">community members</p>
        </div>

        <div className="p-[24px] rounded-[12px] bg-[#f6f5f4] w-[321px] ">
          <h3 className="font-bold text-[3.31rem] text-[#0a85d1]">150+</h3>
          <p className="text-[0.843rem] font-medium">community groups</p>
        </div>

        <div className="p-[24px] rounded-[12px] bg-[#f6f5f4] w-[321px] ">
          <h3 className="font-bold text-[3.31rem] text-[#0a85d1]">50+</h3>
          <p className="text-[0.843rem] font-medium">countries represented</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[3rem] gap-10">
        <div className="bg-[#f6f5f4] rounded-[12px] p-[24px] w-[500px] h-[450px]">
          <p className="text-[18px] font-bold font-inter">
            An always-on support network
          </p>
          <p className="text-[16px] leading-[23px] font-inter">
            Swap setups and share tips in over 149 online <br />
            communities
          </p>
          <img src={icons} />
        </div>

        <div className="bg-[#f6f5f4] rounded-[12px] p-[24px] w-[500px] h-[450px] flex flex-col">
          <p className="text-[18px] font-bold font-inter">
            Choose your language
          </p>
          <p className="text-[16px] leading-[23px] font-inter">
            Notion currently supports English, Korean, Japanese, French, German,
            Spanish, and Portuguese. With more to come!
          </p>

          <div className="mt-[5rem]">
            <img src={welcome} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[3rem] gap-10">
        <div className="bg-[#f6f5f4] rounded-[12px] p-[24px] w-[620px]">
          <Swiper
            id="swiper"
            virtual
            slidesPerView={1}
            direction={"horizontal"}
            pagination
          >
            <SwiperSlide>
              <img src={slide1} className="h-[450px]" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={slide2} className="h-[450px]" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={slide3} className="h-[450px]" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={slide4} className="h-[450px]" />
            </SwiperSlide>
          </Swiper>

          <p className="text-center mt-[2rem] font-medium text-[1rem]">
            Community meetup in Tokyo
          </p>
        </div>

        <div>
          <div className="bg-[#f6f5f4] rounded-[12px] p-[24px]">
            <div className="flex items-center">
              <img src={deborah} />
              <div className="ml-3">
                <p className="font-bold font-inter text-[0.937rem]">
                  Deborah Mecca
                </p>
                <p className="font-normal font-inter text-[0.937rem]">
                  @DebMecca
                </p>
              </div>
            </div>

            <p className="w-[321px] font-inter text-[0.937rem] font-normal mt-5">
              I used to HATE documenting things. And then I started using
              <span className="text-[#1B95E0]"> @NotionHQ </span>
              and I document a lot. A LOT A LOT. Now I just realize that it
              wasn't that I hated documenting, I just hated Google Docs.
            </p>
          </div>

          <div className="bg-[#f6f5f4] rounded-[12px] p-[24px] my-[2rem]">
            <div className="flex items-center">
              <img src={andre} />
              <div className="ml-3">
                <p className="font-bold font-inter text-[0.937rem]">
                  Andre Blackman
                </p>
                <p className="font-normal font-inter text-[0.937rem]">
                  @mindofandre
                </p>
              </div>
            </div>

            <p className="w-[321px] font-inter text-[0.937rem] font-normal mt-5">
              One of the most incredible things about
              <span className="text-[#1B95E0]"> @NotionHQ </span>
              is the dynamic community being built - creating and sharing at its
              best.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
