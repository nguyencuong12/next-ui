import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import dynamic from "next/dynamic";
import styled from "styled-components";
import { EffectFade, Navigation, Pagination } from "swiper";

import Link from "next/link";
// import "./styles.css";
const Wrapper = styled.div`
  position: relative;
  padding: 20px 0px;
`;
const ViewAll = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 48px;
  font-size: 18px;

  a {
    color: ${(props) => props.theme.secondary};
    font-weight: 600;
    position: relative;
    /* position: absolute; */
    ::after {
      content: "";
      /* display: block; */
      height: 3px;
      width: 0;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: ${(props) => props.theme.footerBackground};
      transition: width 200ms;
    }
    :hover::after {
      width: 80px;
    }
  }
`;

const Card = dynamic(() => import("../components/card"));

export default function CarouselCard() {
  return (
    <Wrapper>
      <ViewAll>
        <Link href="#">
          <a>View All</a>
        </Link>
      </ViewAll>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Card title={""} description={""} image={"/cuong1.png"} price={""} chips={""} id={""}></Card>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card title={""} description={""} image={"/cuong1.png"} price={""} chips={""} id={""}></Card>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card title={""} description={""} image={"/cuong1.png"} price={""} chips={""} id={""}></Card>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card title={""} description={""} image={"/cuong1.png"} price={""} chips={""} id={""}></Card>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card title={""} description={""} image={"/cuong1.png"} price={""} chips={""} id={""}></Card>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}
