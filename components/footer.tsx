import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  bottom: 0;
  top: 46px;
  /* background: #595959; */
  background: ${(props) => props.theme.footerBackground};
  color: #fff;
  min-height: 600px;
`;
const Content = styled.div`
  width: 80%;
  margin: 80px auto;
  display: flex;
  justify-content: space-between;
  ul {
    list-style: none;
    font-size: 30px;
    font-weight: 700;
  }
  li {
    font-size: 16px;
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    ul {
      font-size: 18px;
    }
    li {
      font-size: 14px;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <ul className="learn-more">
          Lean More
          <li> Individuals</li>
          <li>Photographers</li>
          <li>Marketing</li>
          <li>Developers</li>
          <li> Ecommerce</li>
          <li>Media</li>
          <li>Pricing</li>
        </ul>
        <ul className="api">API</ul>
        <ul className="support">SUPPORT</ul>

        <ul className="about">
          About Us
          <li> LEARN</li>
          <li> Individuals</li>
          <li>Photographers</li>
          <li>Marketing</li>
          <li>Developers</li>
          <li> Ecommerce</li>
          <li>Media</li>
          <li>Pricing</li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default Footer;
