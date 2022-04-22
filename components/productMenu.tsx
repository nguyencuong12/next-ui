import React from "react";
import { Menu, Divider, Text } from "@mantine/core";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
const MenuStyle = styled.div`
  cursor: pointer;
`;

const MenuProducts = () => {
  const router = useRouter();
  const onNavigate = (event: any) => {
    event.preventDefault();
    router.push("/products");
  };
  return (
    <Menu
      trigger="hover"
      delay={100}
      control={
        <MenuStyle onClick={onNavigate}>
          Products
          {/* <Link href="/product"> */}
        </MenuStyle>
      }
    >
      <Menu.Label>Product Item 1 </Menu.Label>
      <Menu.Item>
        <Link href="/products/seed">Product 1</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/products/pate">
          <a>Product 2</a>
        </Link>
      </Menu.Item>
      <Divider />
      <Menu.Label>Product Item 2 </Menu.Label>
      {/* <Menu.Item >Transfer my data</Menu.Item>,
            <Menu.Item color="red" >Delete my account</Menu.Item> */}
    </Menu>
  );
};

export default MenuProducts;
