import React from "react";
import dynamic from "next/dynamic";
const CartComponent = dynamic(() => import("../../components/cart"));

const Cart = () => {
  return (
    <div>
      <CartComponent></CartComponent>
    </div>
  );
};

export default Cart;
