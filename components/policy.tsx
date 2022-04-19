import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  min-height: 100px;
  background: #fff;
  color: #000;
  border-radius: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const Policy = () => {
  return (
    <Wrapper>
      <Image src="/favicon.ico" height={60} width={60}></Image>
      <div>Description</div>
    </Wrapper>
  );
};

export default Policy;
