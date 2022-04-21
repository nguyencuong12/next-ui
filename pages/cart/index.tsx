import React from "react";
import dynamic from "next/dynamic";
const CartComponent = dynamic(() => import("../../components/cart"));

import styled from "styled-components";
const Wrapper = styled.div``;

const Cart = () => {
  // useEffect(() => {
  //   console.log("RENDER !!!", JSON.parse(CartEvents.get()!));
  // }, []);
  return (
    <Wrapper>
      <CartComponent></CartComponent>
    </Wrapper>
  );
};

export default Cart;
