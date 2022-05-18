import React, { useEffect, useState } from "react";
import CardComponent from "../../components/card";
import { Product_API } from "../../api/product";
import styled from "styled-components";
import PaginationComponent from "../../components/pagination";
const ProductItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 50px 0px;
`;

const Products = () => {
  interface productProps {
    title: string;
    image: string;
    description: string;
    price: string;
    _id: string;
    hashtag: Array<string>;
    type: string;
    id: string;
  }
  const [products, setProducts] = useState<productProps[] | []>([]);
  const [totalProduct, setTotalProduct] = useState<number>();
  const fetchProductsFromReponse = async (page: number) => {
    var response = await Product_API.fetch(page);
    console.log("RESPONSE", response);
    setTotalProduct(response.data.products.count);
    setProducts(response.data.products.product);
  };
  useEffect(() => {
    // fetchProductsFromReponse();
    fetchProductsFromReponse(1);
  }, []);

  const changePage = async (page: number) => {
    console.log("CALL", page);
    await fetchProductsFromReponse(page);
  };

  return (
    <ProductWrapper>
      <h1>Các Sản Phẩm Có Sẵn:</h1>
      <ProductItem>
        {products &&
          products.map((instance) => {
            return <CardComponent title={instance.title} description={instance.description} image={instance.image} price={instance.price} chips={""} id={instance._id} _id={instance._id}></CardComponent>;
          })}
      </ProductItem>
      <PaginationComponent total={totalProduct!} pageChange={changePage}></PaginationComponent>
    </ProductWrapper>

    // products &&
    // products.map((instance) => {
    //   return <h1>AA</h1>;
    // })
    // products.map((instance) => {
    //   return <CardComponent title={""} description={""} image={""} price={""} chips={""} id={""} _id={""}></CardComponent>;
    // })
  );
};

export default Products;
