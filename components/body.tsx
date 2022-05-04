import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  top: 140px;
  /* border: 1px solid red; */
  background: ${(props) => props.theme.primaryColor};
  color: #000;
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
