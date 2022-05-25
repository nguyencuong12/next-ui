import React, { useEffect, useState } from "react";
import { Product_API } from "../../../api/product";
import styled from "styled-components";

import ProductInterface from "../../../utils/interfaces/productInterface";
import CardComponent from "../../../components/card";
import PaginationComponent from "../../../components/pagination";
const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 40px 0px;
`;
const FoodContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Food = () => {
  const [products, setProducts] = useState<ProductInterface[] | []>([]);
  const [total, setTotal] = useState(0);

  const fetchCatFoodsFromResponse = async (page: number) => {
    let response = await Product_API.fetchCatFoods(page);
    console.log("res", response);
    setProducts(response.data.products.product);
    setTotal(response.data.products.count);
  };
  useEffect(() => {
    fetchCatFoodsFromResponse(1);
  }, []);
  //   useEffect(() => {
  //     console.log("PRODUCTS", products);
  //   }, [products]);
  return (
    <FoodWrapper>
      <FoodContent>
        {products &&
          products.map((instance) => {
            return <CardComponent key={instance._id} title={instance.title!} description={instance.description!} image={instance.image!.toString()} price={instance.price!} chips={"Food"} id={instance._id!} _id={instance._id!}></CardComponent>;
          })}
      </FoodContent>
      <PaginationComponent total={total} pageChange={() => {}}></PaginationComponent>
    </FoodWrapper>
  );
};

export default Food;
