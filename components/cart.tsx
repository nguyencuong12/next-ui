import { Button, Table, ActionIcon } from "@mantine/core";
import { JSXElementConstructor, ReactNode } from "react";
import styled from "styled-components";
import { Trash } from "tabler-icons-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const NumberControl = dynamic(() => import("../components/numberInput"));

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
const product = (element: any): ReactNode => {
  return (
    <ProductWrapper>
      <ActionIcon variant="transparent" color={"red"}>
        <Trash />
      </ActionIcon>
      <Image src="/cuong1.png" height={100} width={100}></Image>
      <Link href="/">
        <a>{element.name}</a>
      </Link>
    </ProductWrapper>
  );
};
const onChangeAmount = (callback: any) => {
  console.log("CHANGE AMOUNT CALL!!!", callback);
};
const controlNumber = () => {
  return <NumberControl amount={1} onChangeAmount={onChangeAmount} id={"testID"}></NumberControl>;
};
function Cart() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{product(element)}</td>
      <td>{controlNumber()}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
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
