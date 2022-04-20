import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "@mantine/core";
import CartEvents from "../../utils/storage";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  .image {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #323232;
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
  }
  .detail {
    border: 1px solid black;
    flex: 1;
    margin: 10px;
    background: #323232;
    border-radius: 10px;
    margin: 5px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
    gap: 1em;

    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .description {
      border: 1px solid white;
      border-radius: 10px;
      padding: 20px;
      width: 400px;
    }
    .controls {
      width: 90%;
    }
    @supports not (gap: 1em) {
      * {
        margin: 1em;
      }
    }
    @media only screen and (max-width: 768px) {
      width: 98%;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductView = () => {
  const onAddToCart = () => {
    let products = {
      id: uuidv4(),
      title: "IPHONE 11",
      price: "300.000",
      description: "LOREM",
      image: "/cuong1.png",
      amount: 1,
    };
    CartEvents.add(products);

    // localStorage.setItem("addToCart", JSON.stringify(tempObject));
  };
  return (
    <Wrapper>
      <div className="image">
        <Image src="/box.png" width={600} height={600}></Image>
      </div>
      <div className="detail">
        <div className="title">IPHONE 11</div>
        <div className="location">TPHCM</div>
        <div className="price">300.000</div>
        <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea error labore minus minima laborum non doloribus hic, quae ut repellat itaque vel esse asperiores suscipit fugiat, harum odit recusandae atque?</div>
        <div className="controls">
          <Button
            color="dark"
            fullWidth={true}
            onClick={() => {
              onAddToCart();
            }}
          >
            Add To Cart
          </Button>

          <Button
            color="dark"
            fullWidth={true}
            onClick={() => {
              let testObj = {
                name: "CUONG",
              };
              //   CartEvents.add(testObj);
              CartEvents.delete();
            }}
          >
            TESTING
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductView;
