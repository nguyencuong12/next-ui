import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Box, Button, Textarea, TextInput } from "@mantine/core";
import { AddressBook, At, Mail, Phone } from "tabler-icons-react";
import cartInterface from "../../interfaces/cart";
import CartEvents from "../../utils/storage";
import formatEvents from "../../utils/format";

import { orderProducts } from "../../interfaces/orderProducts";
// import { v4 as uuidv4 } from "uuid";
import { guestAPI } from "../../api";
import { SweetAlert } from "../../components/sweetAlert";
import { LoadingOverlay } from "@mantine/core";
import { useForm } from "@mantine/form";

const Wrapper = styled.div`
  display: flex;
  /* align-items: */
  width: 95%;
  margin: 0 auto;
  padding: 20px 0;
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
  padding: 40px;
  border-radius: 5px;
  * {
    margin: 5px 0px !important;
  }
`;
const ProductInfo = styled.div`
  flex: 1;
  margin: 5px;
  background: ${(props) => props.theme.productColor};
  color: ${(props) => props.theme.secondary};
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 5px;
  * {
    margin: 5px;
    :last-child {
      margin: 0;
    }
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
  const form = useForm({
    initialValues: {
      FullName: "",
      PhoneNumber: "",
      Note: "",
      Email: "",
      Address: "",
    },
    validate: {
      Address: (value) => (value.length < 4 ? "Address must have at least 4 letters" : null),
      FullName: (value) => (value.length < 4 ? "Name must have at least 4 letters" : null),
      PhoneNumber: (value) => (value.length < 10 ? "You must be at least 10 to register" : null),
    },
  });

  const [carts, setCarts] = useState<cartInterface[] | []>([]);

  const [loading, setLoading] = useState(false);

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
  // const onFormChange = (model: string, e: any) => {
  //   setFormData({
  //     ...formData,
  //     [model]: e.target.value,
  //   });
  // };
  const handleOrder = async () => {
    let infoOrder: orderProducts = {
      userInfo: form.values,
      orderInfo: carts,
      totalPriceOrders: renderTotalPrice(),
    };

    setLoading(true);
    let response = await guestAPI.order(infoOrder);
    if (response) {
      setLoading(false);
      SweetAlert.onSuccess("Đã đặt hàng thành công !");
    }
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
      <LoadingOverlay visible={loading}></LoadingOverlay>
      <UserInfo>
        <h4>Thông tin đặt hàng</h4>

        <TextInput required icon={<At />} placeholder="Ho ten" {...form.getInputProps("FullName")} />
        <TextInput required icon={<Phone />} placeholder="SDT" {...form.getInputProps("PhoneNumber")} />
        <TextInput required icon={<Mail />} placeholder="Email" {...form.getInputProps("Email")} />
        <TextInput required icon={<AddressBook />} placeholder="Dia Chi" {...form.getInputProps("Address")} />
        <Textarea
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[0],
            padding: "10px",
            borderRadius: "5px",
          })}
          placeholder="Ghi chu"
          label="Ghi chu"
          {...form.getInputProps("Note")}
        />
      </UserInfo>
      <ProductInfo>
        <h4>Các sản phẩm trong đơn hàng</h4>
        {renderProductInfo}
        <Total>
          <h4 className="title">Tổng Tiền</h4>
          <div className="total-price">{renderTotalPrice()}</div>
        </Total>
        <Button
          color="red"
          type="submit"
          onClick={() => {
            let validate = form.validate();
            console.log("A", validate);
            if (!validate.hasErrors) {
              handleOrder();
            }
          }}
        >
          Đặt Hàng
        </Button>
      </ProductInfo>
    </Wrapper>
  );
};

export default OrderProducts;
