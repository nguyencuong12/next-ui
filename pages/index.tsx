import { useEffect, useState } from "react";
import axios from "axios";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import styled, { css } from "styled-components";
import { addAbortSignal } from "stream";

const Loading = dynamic(() => import("../components/loading"));
const Card = dynamic(() => import("../components/card"));
const Carousel = dynamic(() => import("../components/carousel"));
const CarouselCard = dynamic(() => import("../components/carouselCard"));

// const Pagination = dynamic(() => import("../components/pagination"));
export const SectionMixin = ({}) => css`
  .title {
    text-align: center;
    padding: 5px;
    font-size: 35px;
    font-weight: 600;
    background: #101010;
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
`;

const Test = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 500px;
  background: #323232;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  img {
    width: 300px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
    let response = await axios.get("https://api.sashimeomeo.com/product");
    setProducts(response.data.products.product);
  };
  useEffect(() => {
    fetch();
  }, []);
  if (!products) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch();
  // }, []);
  // useEffect(() => {
  //   console.log("PRODUCTS", products);
  //   // if (products.length > 0) {
  //   //   products.map((instance) => {
  //   //     console.log("INSTANCE", instance.title);
  //   //   });
  //   // }
  // }, [products]);
  // Render data...

  return (
    <Wrapper>
      <Section className="banner">
        <Carousel></Carousel>
      </Section>
      <Section className="hot-products">
        <div className="title">TESTING : !!!</div>
        <div className="content">
          {products.length > 0 ? (
            products.map((instance) => {
              return <Card id={instance._id} key={instance._id} title={instance.title} description={instance.description} image={"/cuong1.png"} price={instance.price} chips={""}></Card>;
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

      {/* <Section className="feature-products">
        <div className="title">Feature</div>
        <div className="content">
          {products.length > 0 ? (
            products.map((instance) => {
              return <Card id={instance._id} key={instance._id} title={instance.title} description={instance.description} image={"/cuong1.png"} price={instance.price} chips={""}></Card>;
            })
          ) : (
            <Loading></Loading>
          )}
        </div>
      </Section> */}
    </Wrapper>
  );
}

// This gets called on every request
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let response = await axios.get("https://api.sashimeomeo.com/product");
//   const data = response.data.products.product;

//   return {
//     props: {
//       results: data,
//     },
//   };
// };
export default Home;
