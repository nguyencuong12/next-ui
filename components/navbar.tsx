import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Input, Badge, Burger } from "@mantine/core";
import { Search } from "tabler-icons-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import LogoSRC from "../public/vercel.svg";
const BurgerStyle = styled(Burger)`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const ImageStyle = styled(Image)`
  @media only screen and (max-width: 768px) {
    margin-top: 10px !important;
  }
`;

const Wrapper = styled.div`
  background: #333333;
  color: #fff;
  height: auto;
  padding: 20px 0px;
  position: fixed;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding: 5px 0px;
  }
`;
const Content = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
const Center = styled.div`
  display: flex;
  flex-basis: 350px;
  flex-direction: column;
  /* border: 1px solid white; */
  align-items: space-between;
  justify-content: center;
  gap: 5px;
`;

export const FlexRow = ({}) => css`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
export const LiStyle = ({}) => css`
  /* padding: 0 20px; */
  margin-left: 20px;
  :first-child {
    margin-left: 0px;
  }
  /* list-style: none; */
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const SearchStyle = styled.div`
  width: 100%;
`;

const Menu = styled.ul`
  ${FlexRow({})};
  transition: left 400ms ease-in-out;

  @media only screen and (max-width: 768px) {
    position: absolute;
    height: 100vh;
    background: pink;
    top: 94px;
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
  /* border: 2px solid white; */
`;
const MenuItem = styled.li`
  ${LiStyle({})};
  width: 100%;

  a {
    text-decoration: none;
    display: block;
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    margin: 0;
  }
`;
const Control = styled.ul`
  ${FlexRow({})};
`;
const ControlItem = styled.li`
  ${LiStyle({})};
`;

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Wrapper>
      <Content>
        <Logo>
          <Link href="/">
            <a>
              <Image priority src={LogoSRC} height={50} width={80} layout="fixed" alt="logo"></Image>
            </a>
            {/* <ImageStyle src="/vercel.svg" height={50} width={80} layout="fixed"></ImageStyle> */}
          </Link>
          <BurgerStyle color="gray" opened={opened} onClick={() => setOpened((o) => !o)} title={title} />
          {/* <div>aa</div> */}
        </Logo>
        <Center>
          <SearchStyle>
            <Input placeholder="Your twitter" rightSectionWidth={70} styles={{ rightSection: { pointerEvents: "none" } }} rightSection={<Search size={20} color="#000"></Search>} />
          </SearchStyle>
          <Menu>
            <MenuItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">
                <a>About</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">
                <a>Product</a>
              </Link>
            </MenuItem>
          </Menu>
        </Center>
        <Control>
          <ControlItem>Cart</ControlItem>
        </Control>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
