import React, { useEffect, useState } from "react";
import { Button, Table, ActionIcon } from "@mantine/core";
import { JSXElementConstructor, ReactNode } from "react";
import styled from "styled-components";
import { Trash } from "tabler-icons-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import cartInterface from "../interfaces/cart";
const NumberControl = dynamic(() => import("../components/numberInput"));
import CartEvents from "../utils/storage";
import formatEvents from "../utils/format";
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const TableWrapper = styled(Table)`
  margin: 5px;
  th {
    color: #fff !important;
  }
`;
const CartCollateral = styled.div`
  flex-basis: 600px;
  padding: 10px;
  margin: 5px;
  background: #5c5f66;
  min-height: 400px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  .subtotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  .payment {
    padding-top: 10px;
  }
`;
const ProductWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const elements = [
  { position: "Ciao", mass: 12.011, symbol: "C", name: "Carbon", href: "/ciao" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
const onDeleteItem = (id: string) => {
  CartEvents.deleteItem(id);
};
const product = (element: cartInterface): ReactNode => {
  return (
    <ProductWrapper>
      <ActionIcon variant="transparent" color={"red"} onClick={() => onDeleteItem(element.id)}>
        <Trash />
      </ActionIcon>
      <Image src={element.image} height={100} width={100}></Image>
      <Link href="/">
        <a>{element.title}</a>
      </Link>
    </ProductWrapper>
  );
};

const controlNumber = (element: cartInterface) => {
  const { amount, id } = element;
  return <NumberControl amount={amount} id={id}></NumberControl>;
};

function Cart() {
  // const [portfolioData, setPortfoloioData] = useState<IProject[] | []>([])

  const [carts, setCarts] = useState<cartInterface[] | []>([]);

  useEffect(() => {
    const listCarts = JSON.parse(CartEvents.get()!);
    setCarts(listCarts);
    window.addEventListener("storage", () => {
      setCarts(JSON.parse(CartEvents.get()!));
    });
  }, []);
  // useEffect(() => {
  //   console.log("CARTS CHANGE !!!", carts);
  // }, [carts]);
  const totalPrice = (price: string, amount: number): number => {
    let result = parseFloat(price) * amount;
    return formatVND(result);

    // return result;
  };
  const formatVND = (price: number): any => {
    return formatEvents.priceVND(price);
  };

  //   window.addEventListener('storage', () => {
  //     console.log("change to local storage!");
  // }
  const rows = carts.map((element) => (
    <tr key={element.id}>
      <td>{product(element)}</td>
      <td>{controlNumber(element)}</td>
      <td>{formatVND(parseFloat(element.price))}</td>
      <td>{totalPrice(element.price, element.amount)}</td>
      {/* <td>{element.price * element.amount}</td> */}
    </tr>
  ));

  return (
    <Wrapper>
      <TableWrapper
        verticalSpacing="xs"
        fontSize={"md"}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[3],
          color: theme.colors.cyan[1],
          // "&:hover": {
          //   backgroundColor: theme.colors.dark[1],
          // },
        })}
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </TableWrapper>
      <CartCollateral>
        <div className="summary">Summary</div>
        <div className="subtotal">
          <h4>Subtotal</h4>
          <p>3.5500.000</p>
        </div>
        <div className="total">
          <h4>Total</h4>
          <p>3.5500.000</p>
        </div>
        <div className="payment">
          <Button fullWidth color={"dark"}>
            ORDER
          </Button>
        </div>
      </CartCollateral>
    </Wrapper>
  );
}
export default Cart;
