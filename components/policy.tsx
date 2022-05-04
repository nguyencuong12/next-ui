import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  min-height: 120px;
  background: ${(props) => props.theme.accent};
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 15px;
  cursor: pointer;

  div {
    font-family: "Square Peg", cursive;
    font-size: 30px;
    /* color: #fff; */
    /* color: ${(props) => props.theme.footerBackground}; */
    color: #000;
    @media only screen and (max-width: 768px) {
      font-size: ${(props) => props.theme.cardFontLg};
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
      <Image src={image} height={60} width={60}></Image>
      <div>{description}</div>
    </Wrapper>
  );
};

export default Policy;
