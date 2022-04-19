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
`;
interface propsType {
  image: string;
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
