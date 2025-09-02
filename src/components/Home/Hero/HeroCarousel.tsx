"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";



const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Desconto
                <br />
                Promoção
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Auscultadores sem fios com Cancelamento de ruído</a>
            </h1>

            <p>
              Dê aos seus ouvidos mais segurança e bastante conforto e claro viva da música e aproveite.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Comprar Agora
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                15%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Desconto
                <br />
                Promoção
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Auscultadores Gamer absoluto</a>
            </h1>

            <p>
              Bons jogos têm bons efeitos sonoros, cuide da sua audição, jogue melhor e finalize seus desafios.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
            >
              Comprar Agora
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-05.png"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
