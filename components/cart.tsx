import React, { useEffect, useState, useContext } from "react";
import { Button, Table, ActionIcon } from "@mantine/core";
import { JSXElementConstructor, ReactNode } from "react";
import styled, { ThemeContext } from "styled-components";
import { Trash, ShoppingCart } from "tabler-icons-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const CustomButton = dynamic(() => import("../components/actionButton"));
const NumberControl = dynamic(() => import("../components/numberInput"));
const LoadingOverLay = dynamic(() => import("../components/loadingOver"));
import TableComponent from "./table";
import CartEvents from "../utils/storage";
import formatEvents from "../utils/format";
import { useRouter } from "next/router";
import { SweetAlert } from "./sweetAlert";
import ProductInterface from "../utils/interfaces/productInterface";

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  .summary-product {
    width: 300px;
  }
`;

const TableWrapper = styled(Table)`
  margin: 10px;
  th {
    color: #000 !important;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0px;
  }
`;
const CartCollateral = styled.div`
  flex-basis: 600px;
  margin: 5px;

  /* background: ${(props) => props.theme.productColor}; */

  background: #f6f6f6;
  /* background: ${(props) => props.theme.swatches}; */
  /* color: ${(props) => props.theme.secondary}; */
  color: black;
  min-height: 280px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0px;
  }
  .summary {
    background: #423e3b;
    color: #fff;
    padding: 10px 0px;
    font-weight: 800;
    font-size: 18px !important;
    text-align: center;
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
    border-top: 1px solid black;
    border-bottom: 1px solid black;
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

const controlNumber = (element: ProductInterface) => {
  const { amount, id } = element;
  return <NumberControl amount={amount!} id={id!}></NumberControl>;
};

function Cart() {
  // const [portfolioData, setPortfoloioData] = useState<IProject[] | []>([])

  const [carts, setCarts] = useState<ProductInterface[] | []>([]);
  const router = useRouter();
  const themeContext = useContext(ThemeContext);
  const product = (element: ProductInterface): ReactNode => {
    return (
      <>
        {element ? (
          <ProductWrapper>
            {/* {element ? <h1>a</h1> : <h1>LOADING</h1>}; */}
            <ActionIcon size={"md"} variant="transparent" style={{ color: themeContext.accent, paddingRight: "5px" }} onClick={() => onDeleteItem(element.id!)}>
              <Trash />
            </ActionIcon>
            <Image alt="cart-image" src={element.image!.toString()} height={80} width={80} objectFit="cover"></Image>
            <Link href="/">
              <a style={{ marginLeft: "10px", fontSize: "14px" }}>{element.title}</a>
            </Link>
          </ProductWrapper>
        ) : (
          <LoadingOverLay></LoadingOverLay>
        )}
      </>
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
      total = total + parseFloat(instance.price!) * instance.amount!;
    });
    return formatVND(total);

    // return total.toString();
  };
  const renderSummary = carts.map((element) => (
    <SummaryWrapper key={element.id}>
      <div className="summary-product">
        {element.title} X {element.amount}
      </div>
      <div className="summary-price">{totalPrice(element.price!, element.amount!)}</div>
    </SummaryWrapper>
  ));
  const rows = carts.map((element) => (
    <tr key={element.id}>
      <td>{product(element)}</td>
      <td>{controlNumber(element)}</td>
      <td>{formatVND(parseFloat(element.price!))}</td>
      <td>{totalPrice(element.price!, element.amount!)}</td>
      {/* <td>{element.price * element.amount}</td> */}
    </tr>
  ));

  return (
    <Wrapper>
      <TableComponent products={carts}></TableComponent>
      <CartCollateral>
        <div className="summary">Tổng Tiền Đơn Hàng</div>
        <div className="subtotal">{renderSummary}</div>
        <div className="total">
          <h4>Total</h4>
          <p>{totalAllProducts()}</p>
        </div>
        <div className="payment">
          <CustomButton IconCustom={() => <ShoppingCart></ShoppingCart>} title="Thanh Toán" fullWidth={true} onClick={() => onHandleOrder()}></CustomButton>
        </div>
      </CartCollateral>
    </Wrapper>
  );
}
export default Cart;
