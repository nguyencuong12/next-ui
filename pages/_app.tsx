import dynamic from "next/dynamic";
// import { Suspense, FC, lazy } from "react";
import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
const Loading = dynamic(() => import("../components/loading"));
const Body = dynamic(() => import("../components/body"));
const Navbar = dynamic(() => import("../components/navbar"), { ssr: false, loading: () => <Loading></Loading> });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Suspense>
      <Navbar></Navbar>
      {/* <Loading></Loading> */}
      <Component {...pageProps} />
      <div style={{ paddingTop: "200px" }}>
        <Body></Body>
      </div>
    </React.Suspense>
  );
}

export default MyApp;
