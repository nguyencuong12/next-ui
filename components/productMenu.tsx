import React from "react";
import { Menu, Divider, Text } from "@mantine/core";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
const MenuStyle = styled.div`
  cursor: pointer;
  width: 120px;
`;
interface MenuProductProps {
  title: string;
}
const MenuProducts = (props: MenuProductProps) => {
  const { title } = props;
  const router = useRouter();
  const onNavigate = (event: any) => {
    event.preventDefault();
    router.push("/products");
  };
  return (
    <Menu
      // trigger="hover"

      delay={100}
      control={
        <MenuStyle>
          {title}
          {/* <Link href="/product"> */}
        </MenuStyle>
      }
    >
      <Menu.Label>Sản Phẩm </Menu.Label>
      <Menu.Item>
        <Link href="/products">Tất Cả Sản Phẩm</Link>
      </Menu.Item>

      <Divider />
      <Menu.Label>Danh Mục Sản Phẩm </Menu.Label>
      <Menu.Item>
        <Link href="/vitamins">Vitamin Cho Mèo</Link>
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <Link href="/cats">Các Giống Mèo</Link>
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <Link href="/cats">Hạt Cho Mèo</Link>
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <Link href="/cats">Pate Cho Mèo</Link>
      </Menu.Item>
      <Divider />
      <Menu.Item>
        <Link href="/cats">Đồ Chơi Cho Mèo</Link>
      </Menu.Item>
      {/* <Menu.Item >Transfer my data</Menu.Item>,
            <Menu.Item color="red" >Delete my account</Menu.Item> */}
    </Menu>
  );
};

export default MenuProducts;
