import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { Input, Badge, Burger, ActionIcon } from "@mantine/core";
import { Search, ShoppingCart } from "tabler-icons-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import LogoSRC from "../public/vercel.svg";

import { change } from "../redux/menu/menu";
import { useRouter } from "next/router";
import { useViewportSize } from "@mantine/hooks";

interface menuProps {
  open: boolean;
}
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
  padding: 10px 0px;
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

const Menu = styled.ul<menuProps>`
  ${FlexRow({})};
  transition: left 400ms ease-in-out;
  @media only screen and (max-width: 768px) {
    position: absolute;
    height: 100vh;
    background: #4d4d4d;
    top: 120px;
    width: 100%;
    left: ${(props) => (props.open ? "0" : "-120%")};
    /* left: 0; */
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
  ::after {
    content: " ";
    font-size: 4px;
    width: 0;
    border-radius: 50%;
    display: block;
    background-color: #fff;
    transition: width 300ms;
    height: 3px;
  }
  :hover::after {
    width: 100%;
  }
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
  const open = useSelector((state: RootState) => state.menuReducer.open);
  const dispatch = useDispatch();
  const { height, width } = useViewportSize();

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      console.log("asds", window.innerWidth);
      if (window.innerWidth <= 768) {
        dispatch(change());
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  const setOpenMenu = () => {
    dispatch(change());
  };
  return (
    <Wrapper>
      {/* <RenderT></RenderT> */}
      <Content>
        <Logo>
          <Link href="/">
            <a>
              <Image priority src={LogoSRC} height={50} width={80} layout="fixed" alt="logo"></Image>
            </a>
            {/* <ImageStyle src="/vercel.svg" height={50} width={80} layout="fixed"></ImageStyle> */}
          </Link>
          <BurgerStyle color="gray" opened={open} onClick={setOpenMenu} title={title} />
          {/* <div>aa</div> */}
        </Logo>
        <Center>
          <SearchStyle>
            <Input placeholder="Your twitter" rightSectionWidth={70} styles={{ rightSection: { pointerEvents: "none" } }} rightSection={<Search size={20} color="#000"></Search>} />
          </SearchStyle>
          <Menu open={open}>
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
          <ControlItem>
            <Link href="/">
              <a>
                <ActionIcon variant="transparent" color="teal">
                  <ShoppingCart />
                </ActionIcon>
              </a>
            </Link>
          </ControlItem>
        </Control>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
