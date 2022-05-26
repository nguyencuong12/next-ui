import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product_API } from "../api/product";
import ProductInterface from "../utils/interfaces/productInterface";
import PaginationComponent from "./pagination";
import CardComponent from "./card";
const LayoutCatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0px;
`;
const LayoutCatTitle = styled.h1``;

const LayoutCatContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

enum TYPE {
  AllProducts = 1,
  Vitamins = 2,
  Breed = 3,
  Seed = 4,
  Pate = 5,
  Toys = 6,
  Clothes = 7,
}
interface propsType {
  type: TYPE;
}

const LayoutCatProducts = (props: propsType) => {
  const { type } = props;
  const [products, setProducts] = useState<ProductInterface[] | []>([]);
  const [totalPage, setTotalPage] = useState<number>();
  const onChangePage = async (page: number) => {
    await fetchProductFromResponse(type, page);
  };
  const fetchProductFromResponse = async (type: TYPE, page: number) => {
    switch (type) {
      case TYPE.Vitamins: {
        let response = await Product_API.fetchCatFoods(page);

        setProducts(response.data.products.product);
        setTotalPage(response.data.products.count);
        break;
      }
      case TYPE.AllProducts: {
        let response = await Product_API.fetch(page);

        setProducts(response.data.products.product);
        setTotalPage(response.data.products.count);
        break;
      }
      case TYPE.Breed: {
        let response = await Product_API.fetchCatBreed(page);

        setProducts(response.data.products.product);
        setTotalPage(response.data.products.count);
        break;
      }
      case TYPE.Seed: {
        let response = await Product_API.fetchCatSeed(page);

        setProducts(response.data.products.product);
        setTotalPage(response.data.products.count);
        break;
      }
      case TYPE.Toys: {
        let response = await Product_API.fetchCatToys(page);
        setProducts(response.data.products.product);
        setTotalPage(response.data.products.count);
        break;
      }
      case TYPE.Pate: {
        let response = await Product_API.fetchCatPate(page);
        setProducts(response.data.products.product);
        setTotalPage(response.data.products.count);
        break;
      }
      case TYPE.Clothes: {
        let response = await Product_API.fetchCatClothes(page);
        setProducts(response.data.products.product);
        setTotalPage(response.data.products.count);
        break;
      }
    }
  };
  const getStringType = (type: TYPE) => {
    switch (type) {
      case TYPE.Vitamins: {
        return "Vitamins";
      }
      case TYPE.Breed: {
        return "Breed";
      }
      case TYPE.Seed: {
        return "Seed";
      }
      case TYPE.Toys: {
        return "Toys";
      }
      case TYPE.Pate: {
        return "Pate";
      }
      case TYPE.AllProducts: {
        return "Các Sản Phẩm Có Sẵn";
      }
    }
  };
  useEffect(() => {
    fetchProductFromResponse(type, 1);
  }, []);
  useEffect(() => {
    console.log("PRODUCT", products);
  }, [products]);

  return (
    <LayoutCatWrapper>
      <LayoutCatTitle>{getStringType(type)}</LayoutCatTitle>
      <LayoutCatContent>
        {products.map((instance) => {
          return <CardComponent key={instance._id} title={instance.title!} description={instance.description!} image={instance.image!.toString()} price={instance.price!} chips={""} id={instance._id!} _id={instance._id!}></CardComponent>;
        })}
      </LayoutCatContent>
      <PaginationComponent total={totalPage!} pageChange={onChangePage}></PaginationComponent>
    </LayoutCatWrapper>
  );
};

export default LayoutCatProducts;
