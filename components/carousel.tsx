import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          <img src="https://cdn.tgdd.vn/2022/04/banner/arp-5km-2880-800-1920x533.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.tgdd.vn/2022/03/banner/2880-800-1920x533-15.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.tgdd.vn/2022/04/banner/13xanh-2880-800-1920x533-5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.tgdd.vn/2022/03/banner/2880-800-1920x533-2.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
