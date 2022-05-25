import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import styled, { css } from "styled-components";
import { Product_API } from "../api/product";

import { useDispatch } from "react-redux";

const Loading = dynamic(() => import("../components/loading"));

const Carousel = dynamic(() => import("../components/carousel"));
const CarouselCard = dynamic(() => import("../components/carouselCard"));
const PolicyItem = dynamic(() => import("../components/policy"));

import { useTranslation } from "react-i18next";

// const Pagination = dynamic(() => import("../components/pagination"));
export const SectionMixin = ({}) => css`
  .title {
    text-align: center;
    padding: 5px;
    font-size: 30px;
    font-weight: 600;
    position: relative;
    /* color: ${(props) => props.theme.footerBackground}; */
    /* color: ${(props) => props.theme.accent}; */
    color: black;
    ::after {
      content: "";
      /* display: block; */
      height: 6px;
      width: 150px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      /* background: ${(props) => props.theme.footerBackground}; */
      /* background: ${(props) => props.theme.accent}; */
      background: black;
    }
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 0px;
  }
`;

const Section = styled.section`
  color: #fff;
  ${SectionMixin({})};
  .introduce {
    border: 1px solid white;
  }
`;
const SectionPolicy = styled.section`
  color: #fff;
  ${SectionMixin({})};
  position: relative;
  top: 0;
  margin-top: 100px;
  /* background: #333333; */
  /* background: ${(props) => props.theme.policyBackground}; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  /* gap: 50px; */
  padding: 20px 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
  /* margin-bottom: 200px; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionBanner = styled.section``;

interface arrProps {
  tag: string;
  title: string;
  image: string;
  description: string;
  price: string;
  _id: string;
  hashtag: Array<string>;
  type: string;
}
interface aa {
  title: string;
}
type HomeProps = {
  results: arrProps[];
};
function Home({ results }: HomeProps) {
  const [products, setProducts] = useState<arrProps[] | []>([]);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const getProductsFromResponse = async () => {
    let res = await Product_API.fetch(1);
    return res.data.products.product;
  };
  const getHotProducts = async () => {
    let response = await Product_API.fetchHotProducts();
    return response.data.products;
  };
  const getFeatureProducts = async () => {
    let response = await Product_API.fetchFeatureProducts();
    return response.data.products;
  };
  useEffect(() => {
    console.log("render");
    // dispatch(setIncludeBanner(true));
    const fetchProducts = async () => {
      let productData = await getProductsFromResponse();
      setProducts(productData);
    };
    fetchProducts();
  }, []);
  if (!products) {
    return <Loading></Loading>;
  }

  return (
    <Wrapper>
      <SectionBanner>
        <Carousel></Carousel>
      </SectionBanner>
      <SectionPolicy>
        <PolicyItem href="/cat/clothes" image="/box.png" description={"Quần Áo Cho Mèo"}></PolicyItem>
        <PolicyItem href="/cat/breeds" image="/cat.png" description={t("cat")}></PolicyItem>
        <PolicyItem href="/cat/food" image="/pet-food1.png" description={t("foods")}></PolicyItem>
        <PolicyItem href="/cat/vitamins" image="/vitamins.png" description={t("vitamin")}></PolicyItem>
      </SectionPolicy>
      <Section>
        <div className="title">{t("hotProducts")}</div>
        <CarouselCard
          chip={"hot"}
          callback={async () => {
            return await getHotProducts();
          }}
        ></CarouselCard>
      </Section>

      <Section>
        <div className="title">Các Sản Phẩm Nổi Bật</div>
        <CarouselCard
          chip={"feature"}
          callback={async () => {
            return await getFeatureProducts();
          }}
        ></CarouselCard>
      </Section>

      {/* <Section className="banner">
        <Carousel></Carousel>
      </Section> */}
    </Wrapper>
  );
}

export default Home;
