import React, { useEffect, useState, useContext } from "react";
import { Button, Table, ActionIcon } from "@mantine/core";
import { JSXElementConstructor, ReactNode } from "react";
import styled, { ThemeContext } from "styled-components";
import { Trash } from "tabler-icons-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import cartInterface from "../interfaces/cart";
const CustomButton = dynamic(() => import("../components/actionButton"));
const NumberControl = dynamic(() => import("../components/numberInput"));
import CartEvents from "../utils/storage";
import formatEvents from "../utils/format";
import { useRouter } from "next/router";
import { SweetAlert } from "./sweetAlert";

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  width: 98%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
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
  background: ${(props) => props.theme.productColor};
  /* background: ${(props) => props.theme.swatches}; */
  color: ${(props) => props.theme.secondary};
  min-height: 300px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  .subtotal {
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: space-between; */
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

const onDeleteItem = (id: string) => {
  SweetAlert.onConfirmDelete(id);

  // CartEvents.deleteItem(id);
};

const controlNumber = (element: cartInterface) => {
  const { amount, id } = element;
  return <NumberControl amount={amount} id={id}></NumberControl>;
};

function Cart() {
  // const [portfolioData, setPortfoloioData] = useState<IProject[] | []>([])

  const [carts, setCarts] = useState<cartInterface[] | []>([]);
  const router = useRouter();
  const themeContext = useContext(ThemeContext);
  const product = (element: cartInterface): ReactNode => {
    return (
      <ProductWrapper>
        <ActionIcon size={"md"} variant="transparent" style={{ color: themeContext.accent }} onClick={() => onDeleteItem(element.id)}>
          <Trash />
        </ActionIcon>
        <Image src={element.image} height={150} width={150}></Image>
        <Link href="/">
          <a>{element.title}</a>
        </Link>
      </ProductWrapper>
    );
  };
  useEffect(() => {
    const listCarts = JSON.parse(CartEvents.get()!);
    if (listCarts) {
      setCarts(listCarts);
    }
    window.addEventListener("storage", () => {
      setCarts(JSON.parse(CartEvents.get()!));
    });
  }, []);

  const onHandleOrder = () => {
    router.push("/order/test");
  };
  // useEffect(() => {
  //   console.log("CARTS CHANGE !!!", carts);
  // }, [carts]);
  const totalPrice = (price: string, amount: number): number => {
    let result = parseFloat(price) * amount;
    return formatVND(result);
  };
  const formatVND = (price: number): any => {
    return formatEvents.priceVND(price);
  };
  const totalAllProducts = () => {
    let total: number = 0;
    carts.map((instance) => {
      total = total + parseFloat(instance.price) * instance.amount;
    });
    return formatVND(total);

    // return total.toString();
  };
  const renderSummary = carts.map((element) => (
    <SummaryWrapper key={element.id}>
      <div className="summary-product">
        {element.title} X {element.amount}
      </div>
      <div className="summary-price">{totalPrice(element.price, element.amount)}</div>
    </SummaryWrapper>
  ));
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
        fontSize={"xs"}
        sx={(theme) => ({
          backgroundColor: themeContext.productColor,
          color: themeContext.secondary,
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
        <div className="subtotal">{renderSummary}</div>
        <div className="total">
          <h4>Total</h4>
          <p>{totalAllProducts()}</p>
        </div>
        <div className="payment">
          <CustomButton title="Order" fullWidth={true}></CustomButton>
        </div>
      </CartCollateral>
    </Wrapper>
  );
}
export default Cart;
