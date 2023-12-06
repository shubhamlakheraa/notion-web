import sparkles from "../assets/sparkler.png";
import books from "../assets/open-book.png";
import target from "../assets/bullseye.png";
import docs from "../assets/google-docs.png";
import notes from "../assets/meeting-notes.webp";
import askai from "../assets/askai.webp";
import projects from "../assets/projects.webp";
import wiki from "../assets/engineering.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation, Autoplay, Pagination, Virtual } from "swiper/modules";
import "swiper/swiper-bundle.css";
import useResponsive from "../hooks/useResponsive";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);


const Feature = () => {

    const { isDesktop } = useResponsive()
  return (
    <>
      {!isDesktop ? (
        <div className="flex items-center justify-center mb-5">
          <div className="w-[345px]">
            <Swiper
              id="swiper"
              virtual
              slidesPerView={1}
              direction={"horizontal"}
            //   autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            //   }}
            //   loop={true}
            >
              <SwiperSlide>
                <div className="py-[16px] px-[20px] rounded-[0.75rem] shadow-2xl">
                  <div className="flex items-center ">
                    <div className="bg-[#f0e1f9] p-[6px] rounded-[0.3rem] mr-[4px] ">
                      <img src={sparkles} />
                    </div>

                    <p className="font-medium text-[1rem]">AI</p>
                    <span className="bg-[#f0e1f9] pt-[1px] pr-[7px] pl-[8px] pb-[2px] rounded-[100px] text-[0.75rem] font-semibold  text-[#9d34da] ">
                      Now with Q&A
                    </span>
                  </div>

                  <div className="font-inter text-[0.84375rem] pt-5">
                    Ask literally anything. Notion will answer.
                  </div>

                  <div className="flex items-center justify text-[#9d34da] mt-2 text-[14px] font-semibold hover:underline hover:decoration-solid  cursor-pointer font-inter">
                        Learn more
                        <i className="bi bi-arrow-right ml-1 text-[#9d34da] "></i>
                  </div>

                </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="py-[16px] px-[20px] rounded-[0.75rem] shadow-2xl">
            <div className="flex items-center ">
              <div className="bg-[#f0e1f9] p-[6px] rounded-[0.3rem] mr-[4px]">
                <img src={books} />
              </div>

              <p className="font-medium text-[1rem]">Wikis</p>
            </div>

            <div className="font-inter text-[0.84375rem] pt-5">
              
              Centralize your knowledge. No more<br /> hunting for answers.
            </div>

            <div className="flex items-center justify text-[#ea4e43] mt-2 text-[14px] font-semibold hover:underline hover:decoration-solid cursor-pointer font-inter">
                        Learn more
                        <i className="bi bi-arrow-right ml-1 text-[#ea4e43] "></i>
                  </div>
          </div>
          
              </SwiperSlide>

              <SwiperSlide>
              <div className="py-[16px] px-[20px] rounded-[0.75rem] shadow-2xl">
            <div className="flex items-center ">
              <div className="bg-[#f0e1f9] p-[6px] rounded-[0.3rem] mr-[4px]">
                <img src={target} />
              </div>

              <p className="font-medium text-[1rem]">Projects</p>
            </div>

            <div className="font-inter text-[0.84375rem] pt-5">
              Manage complex projects without the <br /> chaos.
            </div>
            <div className="flex items-center justify text-[#0a85d1] mt-2 text-[14px] font-semibold hover:underline hover:decoration-solid cursor-pointer font-inter">
                        Learn more
                        <i className="bi bi-arrow-right ml-1 text-[#0a85d1] "></i>
                  </div>
          </div>

              </SwiperSlide>

              <SwiperSlide>
              <div className="py-[16px] px-[20px] rounded-[0.75rem] shadow-2xl">
            <div className="flex items-center ">
              <div className="bg-[#f0e1f9] p-[6px] rounded-[0.3rem] mr-[4px]">
                <img src={docs} />
              </div>

              <p className="font-medium text-[1rem]">Docs</p>
            </div>

            <div className="font-inter text-[0.84375rem] pt-5">
              Simple, powerful, beautiful. Next-gen notes <br /> & docs.
            </div>
            <div className="flex items-center justify text-[#f5a300] mt-2 text-[14px] font-semibold hover:underline hover:decoration-solid cursor-pointer font-inter">
                        Learn more
                        <i className="bi bi-arrow-right ml-1 text-[#f5a300] "></i>
                  </div>
          </div>
              </SwiperSlide>


            </Swiper>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-[rem] gap-10 mb-5">
          <div className="w-[239px] h-[134px] bg-[#f6f5f4] py-[16px] px-[20px] rounded-[0.75rem]">
            <div className="flex items-center ">
              <div className="bg-[#f0e1f9] p-[6px] rounded-[0.3rem] mr-[4px] ">
                <img src={sparkles} />
              </div>

              <p className="font-medium text-[1.5rem]">AI</p>
              <span className="bg-[#f0e1f9] pt-[1px] pr-[7px] pl-[8px] pb-[2px] rounded-[100px] text-[0.75rem] font-semibold  text-[#9d34da] ">
                Now with Q&A
              </span>
            </div>

            <div className="font-inter text-[0.84375rem] pt-5">
              Ask literally anything. Notion will answer.
            </div>
          </div>

          <div className="w-[239px] h-[134px] bg-[#f6f5f4] py-[16px] px-[20px] rounded-[0.75rem]">
            <div className="flex items-center ">
              <div className="bg-[#f0e1f9] p-[6px] rounded-[0.3rem] mr-[4px]">
                <img src={books} />
              </div>

              <p className="font-medium text-[1.5rem]">Wikis</p>
            </div>

            <div className="font-inter text-[0.84375rem] pt-5">
              {" "}
              Centralize your knowledge. No more hunting for answers.
            </div>
          </div>

          <div className="w-[239px] h-[134px] bg-[#f6f5f4] py-[16px] px-[20px] rounded-[0.75rem]">
            <div className="flex items-center ">
              <div className="bg-[#f0e1f9] p-[6px] rounded-[0.3rem] mr-[4px]">
                <img src={target} />
              </div>

              <p className="font-medium text-[1.5rem]">Projects</p>
            </div>

            <div className="font-inter text-[0.84375rem] pt-5">
              Manage complex projects without the chaos.
            </div>
          </div>

          <div className="w-[239px] h-[134px] bg-[#f6f5f4] py-[16px] px-[20px] rounded-[0.75rem]">
            <div className="flex items-center ">
              <div className="bg-[#f0e1f9] p-[6px] rounded-[0.3rem] mr-[4px]">
                <img src={docs} />
              </div>

              <p className="font-medium text-[1.5rem]">Docs</p>
            </div>

            <div className="font-inter text-[0.84375rem] pt-5">
              Simple, powerful, beautiful. Next-gen notes & docs.
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center ">
        <div className={` ${!isDesktop ? "w-[343px]" : "w-[920px]"} `}>
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
              <img src={askai} width={!isDesktop ? 343 : 920} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={wiki} width={!isDesktop ? 343 : 920} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={projects} width={!isDesktop ? 343 : 920} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={notes} width={!isDesktop ? 343 : 920} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Feature;
