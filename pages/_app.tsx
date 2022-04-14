import dynamic from "next/dynamic";
// import { Suspense, FC, lazy } from "react";
import React, { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
const Loading = dynamic(() => import("../components/loading"));
const Body = dynamic(() => import("../components/body"), { ssr: false });
const Navbar = dynamic(() => import("../components/navbar"));
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
const theme = {
  main: "mediumseagreen",
};
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("TYPE CLIENT", typeof window);
  }, []);
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      {/* <Loading></Loading> */}
      <ThemeProvider theme={theme}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Navbar></Navbar>
          <Component {...pageProps} />
        </MantineProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
