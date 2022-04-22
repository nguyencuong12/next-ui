import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { Input, Badge, Burger, ActionIcon } from "@mantine/core";
import { Search, ShoppingCart } from "tabler-icons-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import LogoSRC from "../public/cat.png";

import { change } from "../redux/menu/menu";
import { useRouter } from "next/router";
import { useViewportSize } from "@mantine/hooks";
const ProductMenu = dynamic(() => import("../components/productMenu"));

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
  /* background: ${(props) => props.theme.navBackground}; */
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondary};
  height: auto;
  padding: 20px 0px;
  position: fixed;
  z-index: 200;
  top: 0;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding: 18px 0px;
  }
`;
const Content = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 20px; */
  padding: 10px 0px;
  * {
    margin-right: 8px;
    :last-child {
      margin-right: 0;
    }
  }

  /* @supports not (gap: 20px) {
   
  } */
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
  justify-content: center;
  gap: 5px;
  align-items: flex-start;
  a {
    color: ${(props) => props.theme.accent};
    font-weight: 700;
    font-size: 20px;
  }
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
    /* background: ${(props) => props.theme.swatches2}; */
    background: ${(props) => props.theme.productColor};
    top: 120px;
    width: 100%;
    left: ${(props) => (props.open ? "0" : "-120%")};

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
  :hover a {
    color: #a6a6a6 !important;
  }
  ${LiStyle({})};
  width: 100%;
  a {
    text-decoration: none;
    display: block;
    color: ${(props) => props.theme.secondary};
    transition: color 200ms;
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
  const onSubmitSearch = (event: any) => {
    if (event.keyCode === 13) {
      console.log("ENTER KEY PRESS");
    }
  };
  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     if (window.innerWidth <= 768) {
  //       dispatch(change());
  //     }
  //   };
  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, []);
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
              Sashimeomeo
              {/* <Image priority src={LogoSRC} height={50} width={80} layout="fixed" alt="logo" objectFit="contain"></Image> */}
            </a>
            {/* <ImageStyle src="/vercel.svg" height={50} width={80} layout="fixed"></ImageStyle> */}
          </Link>
          <BurgerStyle color="#fff" opened={open} onClick={setOpenMenu} title={title} />
          {/* <div>aa</div> */}
        </Logo>
        <Center>
          <SearchStyle>
            <Input placeholder="Fill Keyword Or Type" rightSectionWidth={70} onKeyDown={onSubmitSearch} styles={{ rightSection: { pointerEvents: "none" } }} rightSection={<Search size={20} color="#000"></Search>} />
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
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <ProductMenu />
            </MenuItem>
          </Menu>
        </Center>
        <Control>
          <ControlItem>
            <Link href="/cart">
              <a>
                <ActionIcon size="lg" radius="xl" variant="filled" style={{ color: "#fff", background: "#3e3e3f" }}>
                  <ShoppingCart size={25} />
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
