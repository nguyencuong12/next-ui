import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/navbar"), { loading: () => <p>Loading</p> });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
