import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { ProductInf } from "../../interface";
import Image from "next/image";
import { Group, Button } from "@mantine/core";
// import { FaTrash, FaPen } from "react-icons/fa";
import Link from "next/link";
import ProductInterface from "../utils/interfaces/productInterface";
import formatEvents from "../utils/format";
import NumberControl from "./numberInput";
import { SweetAlert } from "./sweetAlert";
import CartEvents from "../utils/storage";
import { Trash } from "tabler-icons-react";

const TableWrapper = styled.table`
  width: 100%;
  margin: 5px;
  border-collapse: collapse;
  padding: 5px;
  border: 3px solid #423e3b;

  td,
  th {
    padding: 10px 15px;
    text-align: center;
  }
  td {
    border-bottom: 1px solid black;
    :last-child {
      border-bottom: 0px;
    }
  }
  tr {
    border: 1px solid black;
  }
  /* td {
    border: 1px solid black;
  } */
  th {
    background: #423e3b;
    color: #fff;
  }
  tbody tr:nth-child(even) {
    background: #f5f5f5;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
    thead {
      display: none;
    }
    table,
    tbody,
    td,
    tr {
      display: block;
      width: 100%;
    }
    tr {
      margin-bottom: 15px;
    }
    td {
      text-align: right;
      position: relative;
      padding-left: 50%;
    }
    td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      top: 8px;
      text-align: left;
      padding-left: 15px;
      font-size: 16px;
      font-weight: bold;
    }
    /* STYLES HERE */
  }
`;
interface propsType {
  products?: ProductInterface[];
}
const TableComponent = (props: propsType) => {
  const { products } = props;
  const onHandleDeleteItem = (id: string) => {
    // SweetAlert2.deleteConfirm(id);
    SweetAlert.onConfirmDelete(id);
  };
  const renderRow = (products: ProductInterface[]) => {
    return products.map((instance) => {
      console.log("INSTANCE", instance);
      return (
        <tr key={instance._id}>
          <td data-label="Sản Phẩm">{instance.title}</td>
          <td data-label="Hình Ảnh">
            <Image alt="Ảnh" src={instance.image!.toString()} height={80} width={80} objectFit={"contain"}></Image>
          </td>
          <td data-label="Số Lượng">
            <Group position="right">
              <NumberControl amount={instance.amount!} id={instance.id!}></NumberControl>
            </Group>
            {/* <Image src={instance.image!.toString()} height={80} width={80} objectFit={"contain"}></Image> */}
          </td>
          <td data-label="Giá Tiền">{formatEvents.priceVND(parseFloat(instance.price!))}</td>
          <td data-label="Thao Tác">
            <Group position="right" spacing="sm">
              <Button
                leftIcon={<Trash />}
                size={"xs"}
                variant="outline"
                color={"red"}
                onClick={() => {
                  SweetAlert.onConfirmDelete(instance.id!);
                  // CartEvents.deleteItem(instance.id!);

                  // let test = JSON.parse(CartEvents.get()!);
                  // console.log("test", test);
                }}
              >
                Xóa
              </Button>
            </Group>
          </td>
        </tr>
      );
    });
  };
  return (
    <TableWrapper>
      {/* {products.map((instance) => {
        return <h1>{instance.title}</h1>;
      })} */}
      <thead>
        <tr>
          <th>Sản Phẩm</th>
          <th>Hình Ảnh</th>
          <th>Số Lượng</th>
          <th>Giá Tiền</th>
          <th>Thao Tác</th>
        </tr>
      </thead>
      <tbody>
        {renderRow(products!)}
        {/* <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
        </tr> */}
      </tbody>
    </TableWrapper>
  );
};

export default TableComponent;
