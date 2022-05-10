import React, { useState, useEffect, useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";

import { Input, Badge, Burger, ActionIcon, Switch } from "@mantine/core";
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
import { useTranslation } from "react-i18next";
import { setIncludeBanner } from "../redux/navbar/navbar";

const ProductMenu = dynamic(() => import("../components/productMenu"));

interface menuProps {
  open: boolean;
}
interface wrapperProps {
  includeBanner: boolean;
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

const Wrapper = styled.div<wrapperProps>`
  /* background: ${(props) => props.theme.navBackground}; */
  /* background: ${(props) => props.theme.primaryColor}; */

  /* background-color: ${(props) => (props.includeBanner ? "rgba(255, 255, 255, 0)" : "black")}; */
  background: black;
  color: ${(props) => props.theme.secondary};
  height: 90px;
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
  /* border: 2px solid black; */

  @media only screen and (max-width: 768px) {
    position: absolute;
    height: 100vh;
    /* background: ${(props) => props.theme.swatches2}; */
    background: ${(props) => props.theme.productColor};
    top: 88px;
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

  text-align: center;
  min-width: 100px;
  a {
    text-decoration: none;
    display: block;
    color: ${(props) => props.theme.secondary};
    transition: color 200ms;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    margin: 0;
    width: 100%;
  }
`;
const Control = styled.ul`
  ${FlexRow({})};
`;
const ControlItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;

  min-width: 150px;
  ${LiStyle({})};
`;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [check, setCheck] = useState(false);
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const open = useSelector((state: RootState) => state.menuReducer.open);
  const includeNav = useSelector((state: RootState) => state.navbarReducer.includeBanner);
  const dispatch = useDispatch();
  const themeContext = useContext(ThemeContext);
  const onSubmitSearch = (event: any) => {
    if (event.keyCode === 13) {
      console.log("ENTER KEY PRESS");
    }
  };
  useEffect(() => {
    let language = localStorage.getItem("language");
    if (language === "en") {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, []);
  useEffect(() => {
    if (check) {
      console.log("CHECK", check);
    }
  }, [check]);

  const setOpenMenu = () => {
    dispatch(change());
  };

  return (
    <Wrapper includeBanner={includeNav}>
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
          <BurgerStyle color={themeContext.accent} opened={open} onClick={setOpenMenu} title={title} />
          {/* <div>aa</div> */}
        </Logo>
        <Center>
          {/* <SearchStyle>
            <Input placeholder="Fill Keyword Or Type" rightSectionWidth={70} onKeyDown={onSubmitSearch} styles={{ rightSection: { pointerEvents: "none" } }} rightSection={<Search size={20} color="#000"></Search>} />
          </SearchStyle> */}
          <Menu open={open}>
            <MenuItem>
              <Link href="/">
                <a>{t("home")}</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about">
                <a>{t("about")}</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/contact">
                <a>{t("contact")}</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <ProductMenu title={t("product")} />
            </MenuItem>
          </Menu>
        </Center>
        <Control>
          <ControlItem>
            <Switch
              color="yellow"
              onLabel="VN"
              offLabel="US"
              size="md"
              checked={check}
              onChange={() => {
                let language = localStorage.getItem("language");

                if (language === "vn") {
                  localStorage.setItem("language", "en");
                  i18n.changeLanguage("en");
                  setCheck(true);
                } else {
                  localStorage.setItem("language", "vn");
                  i18n.changeLanguage("vn");
                  setCheck(false);
                }
              }}
            />
            <Link href="/search">
              <a>
                <ActionIcon size="lg" radius="xl" variant="transparent" style={{ color: "#fff" }}>
                  <Search size={22} />
                </ActionIcon>
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <ActionIcon size="lg" radius="xl" variant="transparent" style={{ color: "#fff" }}>
                  <ShoppingCart size={22} />
                </ActionIcon>
              </a>
            </Link>

            {/* <ActionIcon
              size="lg"
              radius="xl"
              variant="filled"
              style={{ color: "#000", background: themeContext.accent }}
              onClick={() => {
                i18n.changeLanguage("vn");
              }}
            >
              <ShoppingCart size={25} />
            </ActionIcon> */}
          </ControlItem>
        </Control>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
