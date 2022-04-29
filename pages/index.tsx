import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import styled, { css } from "styled-components";

import { Product_API } from "../api/product";
const Loading = dynamic(() => import("../components/loading"));
const Card = dynamic(() => import("../components/card"));
const Carousel = dynamic(() => import("../components/carousel"));
const CarouselCard = dynamic(() => import("../components/carouselCard"));
const PolicyItem = dynamic(() => import("../components/policy"));

// const Pagination = dynamic(() => import("../components/pagination"));
export const SectionMixin = ({}) => css`
  .title {
    text-align: center;
    padding: 5px;
    font-size: 30px;
    font-weight: 600;
    position: relative;
    /* color: ${(props) => props.theme.footerBackground}; */
    color: ${(props) => props.theme.accent};
    ::after {
      content: "";
      /* display: block; */
      height: 5px;
      width: 150px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      /* background: ${(props) => props.theme.footerBackground}; */
      background: ${(props) => props.theme.accent};
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
  min-height: 360px;
  /* background: #333333; */
  background: ${(props) => props.theme.policyBackground};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* gap: 50px; */
  padding: 50px 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  /* margin-bottom: 200px; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  const fetch = async () => {
    let productData = await getProductsFromResponse();
    setProducts(productData);
  };
  const getProductsFromResponse = async () => {
    let res = await Product_API.fetch();
    return res.data.products.product;
  };
  useEffect(() => {
    fetch();
  }, []);
  if (!products) {
    return <Loading></Loading>;
  }

  return (
    <Wrapper>
      <Section className="banner">
        <Carousel></Carousel>
      </Section>
      <SectionPolicy>
        <PolicyItem image="/box.png" description="Order"></PolicyItem>
        <PolicyItem image="/cat.png" description="Cats"></PolicyItem>
        <PolicyItem image="/pet-food1.png" description="Foods"></PolicyItem>
        <PolicyItem image="/vitamins.png" description="Vitamins"></PolicyItem>
      </SectionPolicy>

      <Section className="hot-products">
        <div className="title">TESTING : !!!</div>
        <div className="content">
          {products.length > 0 ? (
            products.map((instance) => {
              return <Card id={instance._id} key={instance._id} title={instance.title} description={instance.description} image={instance.image} price={instance.price} chips={""}></Card>;
            })
          ) : (
            <Loading></Loading>
          )}
        </div>
      </Section>
      <Section>
        <div className="title">Hot Products</div>
        <CarouselCard></CarouselCard>
      </Section>
      <Section>
        <div className="title">Feature Products</div>
        <CarouselCard></CarouselCard>
      </Section>
    </Wrapper>
  );
}

export default Home;
