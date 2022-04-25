import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      This is Contact Page
      <p>{process.env.MESSAGE}</p>
      <Image src="https://api.sashimeomeo.com/cart.jpg" height={200} width={200} objectFit={"contain"}></Image>
      {/* <Image src="http://localhost:5000/cart.jpg" height={59} width={50}></Image> */}
      {/* <Image src="http://localhost:5000/cart.jpg" width="200" height="200"></Image> */}
    </div>
  );
};

export default Contact;
