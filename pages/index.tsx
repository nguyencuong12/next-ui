import { useEffect, useState } from "react";
import axios from "axios";

//
import dynamic from "next/dynamic";
interface arrProps {
  tag: string;
  title: string;
  image: string;
  description: string;
  price: string;
  _id: string;
  hashtag: Array<string>;
  type: string;
}

function Home() {
  const [products, setProducts] = useState<arrProps[] | []>([]);
  const fetch = async () => {
    let response = await axios.get("https://api.sashimeomeo.com/product");
    setProducts(response.data.products.product);
  };

  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    console.log("PRODUCTS", products);
    // if (products.length > 0) {
    //   products.map((instance) => {
    //     console.log("INSTANCE", instance.title);
    //   });
    // }
  }, [products]);
  // Render data...

  return (
    <div style={{ paddingTop: "200px" }}>
      <h1>sad</h1>
      {products.map((instance) => {
        return <h1>{instance.title}</h1>;
      })}
    </div>
  );
}

// This gets called on every request

export default Home;
