import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={40}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image alt="banner-image" src="/sashiBannerTest.svg" width={1920} height={"930"}></Image>
          {/* <img src="https://cdn.tgdd.vn/2022/04/banner/arp-5km-2880-800-1920x533.png" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="banner-image" src="/sashiBannerTest.svg" width={1920} height={"930"}></Image>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="banner-image" src="/sashiBannerTest.png" width={1920} height={"930"}></Image>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="banner-image" src="/sashiBannerTest.png" width={1920} height={"930"}></Image>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
