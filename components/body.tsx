import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  top: 126px;
  /* border: 1px solid red; */

  background: #3e3e3f;
  min-height: 100vh;
`;

interface propsType {
  children: JSX.Element;
}
const Body = (props: propsType) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export default Body;
