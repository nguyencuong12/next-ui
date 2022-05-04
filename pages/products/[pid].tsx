import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Button } from '@mantine/core';
import CartEvents from '../../utils/storage';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { Product_API } from '../../api/product';
import { useTranslation } from 'react-i18next';
import { SweetAlert } from '../../components/sweetAlert';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  .image {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.productColor};
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
  }
  .detail {
    flex: 1;
    background: ${props => props.theme.productColor};
    color: ${props => props.theme.secondary};
    border-radius: 10px;
    margin: 5px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
    /* gap: 1em; */
    div {
      margin: 0.5em;
      :last-child {
        margin: 0;
      }
    }

    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .description {
      border-radius: 10px;
      padding: 20px;
      width: 400px;
      text-align: center;
    }
    .controls {
      width: 90%;
    }

    @media only screen and (max-width: 768px) {
      width: 98%;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
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
const ProductView = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [product, setProduct] = useState<productProps>();
  const { pid } = router.query;
  useEffect(() => {
    if (pid) {
      getProduct(pid);
    }
  }, []);
  const getProduct = async (id: string | string[]) => {
    let productFromResponses = await getProductFromResponse(id);
    setProduct(productFromResponses);
  };
  const getProductFromResponse = async (id: string | string[]) => {
    let response = await Product_API.fetchProductByID(id.toString());
    return response.data.product;
  };

  const onAddToCart = () => {
    // let products = {
    //   id: uuidv4(),
    //   title: "IPHONE" + (value + 1),
    //   price: "300000",
    //   description: "LOREM",
    //   image: "/cuong1.png",
    //   amount: 1,
    // };
    let products = {
      ...product,
      amount: 1,
    };
    CartEvents.add(products);
    SweetAlert.onSuccess('Add To Cart Complete !!!').then(() => {
      router.push('/cart');
    });
    // localStorage.setItem("addToCart", JSON.stringify(tempObject));
  };
  return (
    <>
      {product && (
        <Wrapper>
          <div className="image">
            <Image
              alt="product-image"
              src={product.image}
              width={600}
              height={600}
              objectFit="contain"
            ></Image>
          </div>

          <div className="detail">
            <div className="title">{product.title}</div>
            <div className="location">TPHCM</div>
            <div className="price">{product.price}</div>
            <div className="description">{product.description}</div>
            <div className="controls">
              <Button
                style={{ marginTop: '20px' }}
                color="red"
                fullWidth={true}
                onClick={() => {
                  onAddToCart();
                }}
              >
                {t('addToCart')}
              </Button>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default ProductView;
