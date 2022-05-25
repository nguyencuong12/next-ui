import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  min-height: 120px;
  background: ${(props) => props.theme.productColor};
  border-radius: 10px;
  width: 360px;
  /* overflow-x: hidden; */

  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 15px;
  cursor: pointer;

  div {
    /* font-family: "Square Peg", cursive; */
    font-size: 16px;
    /* color: #fff; */
    /* color: ${(props) => props.theme.footerBackground}; */
    color: #fff;
    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
interface propsType {
  image: string;
  description: string;
  href: string;
}
const Policy = (props: propsType) => {
  const { image, href, description } = props;
  const router = useRouter();
  const onHandleClick = (href: string) => {
    router.push(href);
  };
  return (
    <Wrapper
      onClick={() => {
        onHandleClick(href);
      }}
    >
      <Image alt="policy" src={image} height={60} width={60}></Image>
      <div style={{ textAlign: "center" }}>{description}</div>
    </Wrapper>
  );
};

export default Policy;
