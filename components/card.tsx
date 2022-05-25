import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button, Group } from "@mantine/core";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const CustomButton = dynamic(() => import("../components/actionButton"));
import { useTranslation } from "react-i18next";
import { View360, ShoppingCart } from "tabler-icons-react";
import formatEvents from "../utils/format";
const Wrapper = styled.div`
  position: relative;
  min-height: 450px;
  width: 350px;
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
    box-shadow: 1px 1px 15px 2px #000;
  }
  div {
    font-size: 18px;
  }
  .title-card {
    padding: 5px;
    width: 80%;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
  .price-card {
    color: red;
    padding: 10px;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    div {
      font-size: 16px;
    }
    .title-card {
      font-size: 16px;
    }
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
    console.log("CALL 123");
    window.history.replaceState(null, "", "/about");
    router.push(`/products/${href}`, `/products/${href}`);

    // window.location.replace(`products/${href}`);
    // router.push({
    //   pathname:
    // });
    // router.push({
    //   asPath: "products/" + href,
    // });
    // router.push("products/" + href, locale);
    // router.push();
    // window.location.href = "products/" + href;
  };
  return (
    <Wrapper
      onClick={() => {
        onHandleClick(_id);
      }}
    >
      {chips && <div className="chips">{chips}</div>}
      {image && <Image alt="product-image" src={image} width="250" height="300" objectFit="contain"></Image>}
      <div className="title-card">{title}</div>
      <div className="price-card">{formatEvents.priceVND(parseFloat(price))}</div>
    </Wrapper>
  );
};

export default CardComponent;
