import React from "react";
import styled from "styled-components";
import Image from "next/image";
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  /* img {
    border-radius: 100px;
  } */
`;

const Loading = () => {
  return (
    <Wrapper>
      <Image src="/loading.gif" height={500} width={800} alt="image"></Image>
      <h2>Loading ...</h2>
    </Wrapper>
  );
};

export default Loading;
