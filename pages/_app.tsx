import dynamic from "next/dynamic";
// import { Suspense, FC, lazy } from "react";
import React, { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import { Button, MantineProvider } from "@mantine/core";
import NextNProgress from "nextjs-progressbar";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { layoutVariables } from "../styles/variable.global";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
const Navbar = dynamic(() => import("../components/navbar"));
const Footer = dynamic(() => import("../components/footer"));
const Body = dynamic(() => import("../components/body"));

import vietnam from "../locates/vietnam.json";
import english from "../locates/english.json";
import Script from "next/script";
const Layout = styled.div`
  position: relative;
  top: 0;
  z-index: 200;
  height: auto;
`;
const theme = {
  main: "mediumseagreen",
};
const WrapperLoading = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  position: absolute;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const resources = {
  en: {
    translation: english,
  },
  vn: {
    translation: vietnam,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

{
  /*

<script async src="https://www.googletagmanager.com/gtag/js?id=G-C07RQ395DP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C07RQ395DP');
</script> 


*/
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    localStorage.setItem("language", "vn");
  }, []);

  return (
    <>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-C07RQ395DP"></Script>
      <Script strategy="lazyOnload">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-C07RQ395DP');`}
      </Script>
      <Provider store={store}>
        <NextNProgress></NextNProgress>
        <Head>
          <title>Sashimeomeo Shop</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
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
    </>
  );
}

export default MyApp;
