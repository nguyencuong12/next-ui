import React, { useEffect } from "react";
import styled from "styled-components";
import { setIncludeBanner } from "../redux/navbar/navbar";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  position: relative;
  top: 96px;
  /* background: ${(props) => props.theme.primaryColor}; */
  color: #000;
  min-height: 70vh;
`;

interface propsType {
  children: JSX.Element;
}
const Body = (props: propsType) => {
  const { children } = props;
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(setIncludeBanner(false));
  }, []);
  return <Wrapper>{children}</Wrapper>;
};

export default Body;
