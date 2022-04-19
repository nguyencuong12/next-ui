import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  position: relative;
  height: 450px;
  width: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  align-items: center;
  background: #323232;
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
}

const CardComponent = (props: cardProps) => {
  const { title, description, image, price, chips } = props;

  return (
    <Wrapper>
      <div className="chips">HOT</div>
      <Image alt="product-image" src={image} width="250" height="300" objectFit="cover"></Image>
      <div className="title-card">{title}</div>
      <div className="description-card">{description}</div>
      <div className="price-card">{price}</div>
    </Wrapper>
  );
};

export default CardComponent;
