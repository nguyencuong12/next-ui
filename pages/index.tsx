import { useEffect } from "react";
import axios from "axios";

//
import dynamic from "next/dynamic";
function Home({ data }: any) {
  // Render data...
  useEffect(() => {
    console.log("type", typeof window);
    console.log("DATA", data);
  }, []);
  return (
    <div style={{ paddingTop: "200px" }}>
      <h1>{data.count}</h1>
      CUONG
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  let response = await axios.get("https://api.sashimeomeo.com/product");
  // Fetch data from external API
  const data = response.data.products;
  // Pass data to the page via props

  // const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

// This gets called on every request

export default Home;
