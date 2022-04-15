import { useEffect } from "react";

import dynamic from "next/dynamic";
function Home({ data }: any) {
  // Render data...
  useEffect(() => {
    console.log("type", typeof window);
  }, []);
  return <div>CUONG</div>;
}

// This gets called on every request

export default Home;
