import dynamic from "next/dynamic";
// import { Suspense, FC, lazy } from "react";
import React, { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import { MantineProvider } from "@mantine/core";
import NextNProgress from "nextjs-progressbar";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { layoutVariables } from "../styles/variable.global";

const Navbar = dynamic(() => import("../components/navbar"));
const Footer = dynamic(() => import("../components/footer"));
const Body = dynamic(() => import("../components/body"));

const Layout = styled.div`
  position: relative;
`;

const theme = {
  main: "mediumseagreen",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress></NextNProgress>
      <Head>
        <title>Sashimeomeo Shop</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={layoutVariables}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Layout>
            <Navbar></Navbar>
            <Body>
              <Component {...pageProps} />
            </Body>
            <Footer></Footer>
          </Layout>
        </MantineProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
