import React from "react";
import { Menu, Divider, Text } from "@mantine/core";
import Link from "next/link";
import styled from "styled-components";

const MenuProducts = () => {
  return (
    <Menu
      trigger="hover"
      delay={100}
      control={
        <Link href="/product">
          <a>Product</a>
        </Link>
      }
    >
      <Menu.Label>Product Item 1 </Menu.Label>
      <Menu.Item>
        <Link href="/product/seed">Product 1</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/product/pate">Product 2 </Link>
      </Menu.Item>
      <Divider />
      <Menu.Label>Product Item 2 </Menu.Label>
      {/* <Menu.Item >Transfer my data</Menu.Item>,
            <Menu.Item color="red" >Delete my account</Menu.Item> */}
    </Menu>
  );
};

export default MenuProducts;
