import dynamic from "next/dynamic";
// import { Suspense, FC, lazy } from "react";
import React, { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
const Navbar = dynamic(() => import("../components/navbar"));

import { MantineProvider } from "@mantine/core";
import NextNProgress from "nextjs-progressbar";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { change } from "../redux/menu/menu";
const theme = {
  main: "mediumseagreen",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress></NextNProgress>
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
    </Provider>
  );
}

export default MyApp;
