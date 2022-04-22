import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button, Input, Select, Textarea } from "@mantine/core";
import { AddressBook, At, Mail, Phone } from "tabler-icons-react";
import cartInterface from "../../interfaces/cart";
import CartEvents from "../../utils/storage";
import formatEvents from "../../utils/format";
import { addAbortSignal } from "stream";

const Wrapper = styled.div`
  display: flex;
  /* align-items: */
  width: 95%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const UserInfo = styled.div`
  margin: 5px;
  background: ${(props) => props.theme.productColor};
  color: ${(props) => props.theme.secondary};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  * {
    margin: 8px 0px !important;
  }
`;
const ProductInfo = styled.div`
  flex: 1;
  margin: 5px;
  background: ${(props) => props.theme.productColor};
  color: ${(props) => props.theme.secondary};
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  * {
    margin: 5px !important;
  }
`;
const ProductInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Total = styled.div`
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderProducts = () => {
  const [carts, setCarts] = useState<cartInterface[] | []>([]);
  const [totalOrder, setTotalOrder] = useState(0);
  useEffect(() => {
    const listCarts = JSON.parse(CartEvents.get()!);
    setCarts(listCarts);
  }, []);
  const totalPriceWithAmount = (price: string, amount: number) => {
    let result: number = parseFloat(price) * amount;
    return formatEvents.priceVND(result);
  };

  const renderTotalPrice = (): any => {
    let result: number = 0;
    carts.map((instance) => {
      result = result + parseFloat(instance.price) * instance.amount;
    });
    return formatEvents.priceVND(result);
    // return result;
  };
  const handleOrder = () => {
    let test = {
      productInfo: carts,
      userInfo: "userInfo",
    };
    console.log("test", test);
  };
  const renderProductInfo = carts.map((instance) => (
    <ProductInfoContent key={instance.id}>
      <div className="product-name">
        {instance.title} X {instance.amount}
      </div>
      <div className="product-price">{totalPriceWithAmount(instance.price, instance.amount)}</div>
    </ProductInfoContent>
  ));

  return (
    <Wrapper>
      <UserInfo>
        <h4>USER INFORMATION</h4>
        <Input icon={<At />} placeholder="Ho ten" />
        <Input icon={<Phone />} placeholder="SDT" />
        <Input icon={<Mail />} placeholder="Email" />
        <Input icon={<AddressBook />} placeholder="Dia Chi" />
        <Textarea
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[0],
            padding: "10px",
            borderRadius: "5px",
          })}
          placeholder="Ghi chu"
          label="Ghi chu"
          required
        />
      </UserInfo>
      <ProductInfo>
        <h4>Product Information</h4>
        {renderProductInfo}
        <Total>
          <h4 className="title">Total</h4>
          <div className="total-price">{renderTotalPrice()}</div>
        </Total>
        <Button color="dark" onClick={() => handleOrder()}>
          Pre Order
        </Button>
      </ProductInfo>
    </Wrapper>
  );
};

export default OrderProducts;
