import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  min-height: 120px;
  background: #595959;
  color: #000;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;

  div {
    font-family: "Square Peg", cursive;
    font-size: 30px;
    color: #fff;
    @media only screen and (max-width: 768px) {
      font-size: ${(props) => props.theme.cardFontLg};
    }
  }
`;
interface propsType {
  image: string;
  description?: string;
}
const Policy = (props: propsType) => {
  return (
    <Wrapper>
      <Image src={props.image} height={60} width={60}></Image>
      <div>Description</div>
    </Wrapper>
  );
};

export default Policy;
