import engineering from "../assets/engineering.avif";
import design from "../assets/design.avif";
import rocket from "../assets/rocket.avif";
import operations from "../assets/operations.png";
import marketing from "../assets/marketing.png";
import hr from "../assets/hr-v2.png";
import brand from "../assets/design.webp";
import wiki from "../assets/engineering.webp";
import opera from "../assets/operations.webp";
import humanResources from "../assets/hr.webp";
import market from "../assets/market.png";
import product from "../assets/product.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation, Autoplay, Pagination, Virtual } from "swiper/modules";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Industry = () => {
  return (
    <>
      <h1 className="text-[2.81rem] font-inter font-bold text-center mt-[3rem] mb-5">
        Every team, side-by-side
      </h1>

      <div className="  flex items-center justify-center mx-[8rem]">
        <div className="w-[20%] mx-5 ">
          <div className="text-[1rem] rounded-[16px] bg-[#f6f5f4] font-medium font-inter px-[12px] pt-[10px] pb-[12px] ">
            <div className="flex items-center justify-center ">
              <img src={engineering} width={70} />
            </div>
            <p className="text-center">Engineering</p>
          </div>
        </div>

        <div className="w-[20%] mx-5">
          <div className="text-[1rem] rounded-[16px] bg-[#f6f5f4] font-medium font-inter px-[12px] pt-[10px] pb-[12px] ">
            <div className="flex items-center justify-center ">
              <img src={design} width={70} />
            </div>
            <p className="text-center">Design</p>
          </div>
        </div>

        <div className="w-[20%] mx-5">
          <div className="text-[1rem] rounded-[16px] bg-[#f6f5f4] font-medium font-inter px-[12px] pt-[10px] pb-[12px] ">
            <div className="flex items-center justify-center ">
              <img src={rocket} width={70} />
            </div>
            <p className="text-center">Product</p>
          </div>
        </div>

        <div className="w-[20%] mx-5">
          <div className="text-[1rem] rounded-[16px] bg-[#f6f5f4] font-medium font-inter px-[12px] pt-[10px] pb-[12px] ">
            <div className="flex items-center justify-center ">
              <img src={marketing} width={70} />
            </div>
            <p className="text-center">Marketing</p>
          </div>
        </div>

        <div className="w-[20%] mx-5">
          <div className="text-[1rem] rounded-[16px] bg-[#f6f5f4] font-medium font-inter px-[12px] pt-[10px] pb-[12px] ">
            <div className="flex items-center justify-center ">
              <img src={operations} width={70} />
            </div>
            <p className="text-center">Operations</p>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="text-[1rem] rounded-[16px] bg-[#f6f5f4] font-medium font-inter px-[12px] pt-[10px] pb-[12px] ">
            <div className="flex items-center justify-center ">
              <img src={hr} width={70} />
            </div>
            <p className="text-center">HR</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-[1080px] ">
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
              <img src={wiki} width={974} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={brand} width={974} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={product} width={974} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={market} width={974} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={opera} width={974} height={400} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={humanResources} width={974} height={400} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Industry;
