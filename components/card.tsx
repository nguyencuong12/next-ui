import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button, Group } from "@mantine/core";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const CustomButton = dynamic(() => import("../components/actionButton"));
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  position: relative;
  height: 450px;
  width: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  align-items: center;
  background: ${(props) => props.theme.productColor};
  margin: 15px;

  .chips {
    position: absolute;
    top: 10px;
    left: 10px;
    border: 2px solid #ef9704;
    min-height: 30px;
    min-width: 40px;
    padding: 0px 10px;
    border-radius: 10px;
    color: #ef9704;
    z-index: 100;
  }

  cursor: pointer;
  transition: box-shadow 190ms;
  :hover {
    box-shadow: 1px 1px 15px 2px #ffffff;
  }
  div {
    font-family: "Square Peg", cursive;
    font-size: 22px;
  }
  .title-card {
    font-size: ${(props) => props.theme.cardFontLg};
  }
  .description-card {
    font-size: ${(props) => props.theme.cardFontMd};
  }
  .price-card {
    font-size: ${(props) => props.theme.cardFontMd};
    color: red;
  }
`;
interface cardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  chips: string;
  id: string;
  _id: string;
}

const CardComponent = (props: cardProps) => {
  const { t, i18n } = useTranslation();
  const { title, description, image, price, chips, _id, id } = props;
  const router = useRouter();
  const onHandleClick = (href: string) => {
    router.push("products/" + href);
  };
  return (
    <Wrapper
      onClick={() => {
        onHandleClick(_id);
      }}
    >
      {chips && <div className="chips">{chips}</div>}
      <Image alt="product-image" src={image} width="250" height="300" objectFit="cover"></Image>
      <div className="title-card">{title}</div>
      <div className="description-card">{description}</div>
      <div className="price-card">{price}</div>
      <Group style={{ padding: "10px" }} noWrap={true}>
        <CustomButton
          title={t("viewProduct")}
          onClick={() => {
            router.push("/products/asd");
          }}
        ></CustomButton>
        <CustomButton
          title={t("addToCart")}
          onClick={() => {
            router.push("/cart");
          }}
        ></CustomButton>
      </Group>
    </Wrapper>
  );
};

export default CardComponent;
