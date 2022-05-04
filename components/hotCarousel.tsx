import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { EffectFade, Navigation, Pagination } from "swiper";
import Link from "next/link";
import { Product_API } from "../api/product";
import { useTranslation } from "react-i18next";

const Card = dynamic(() => import("../components/card"));
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
interface productProps {
  title: string;
  image: string;
  description: string;
  price: string;
  _id: string;
  hashtag: Array<string>;
  type: string;
  id: string;
}
const HotCarousel = () => {
  const [products, setProducts] = useState<productProps[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let hotProducts = await getProductsFromResponse();
    setProducts(hotProducts);
  };
  const getProductsFromResponse = async () => {
    let response = await Product_API.fetchHotProducts();
    return response.data.products;
  };
  return (
    <Wrapper>
      <ViewAll>
        <Link href="#">
          <a>{t("viewAll")}</a>
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
        {products &&
          products.map((instance) => {
            return (
              <SwiperSlide key={instance._id}>
                <Card _id={instance._id} title={instance.title} description={instance.description} image={instance.image} price={instance.price} chips={"Hot"} id={instance.id}></Card>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Wrapper>
  );
};

export default HotCarousel;