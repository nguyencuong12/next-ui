import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardComponent from "../../components/card";
import PaginationComponent from "../../components/pagination";
import { Product_API } from "../../api/product";
const VitaminWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const VitaminContent = styled.section``;

const VitaminPage = () => {
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
  const [totalPage, setTotalPage] = useState<number>();

  const fetchVitaminFromResponse = async (page: number) => {
    let response = await Product_API.fetchVitaminProducts(page);
    console.log("RESPONSE  ", response);
    setTotalPage(response.data.products.count);
    setProducts(response.data.products.product);
  };
  useEffect(() => {
    fetchVitaminFromResponse(1);
  }, []);
  return (
    <VitaminWrapper>
      <VitaminContent>
        {products &&
          products.map((instance) => {
            return <CardComponent key={instance._id} title={instance.title} description={instance.description} image={instance.image} price={instance.price} chips={"VT"} id={instance._id} _id={instance._id}></CardComponent>;
          })}
      </VitaminContent>
      <PaginationComponent total={totalPage!} pageChange={() => {}}></PaginationComponent>
    </VitaminWrapper>
  );
};

export default VitaminPage;
