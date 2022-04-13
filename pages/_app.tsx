import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/navbar"), { ssr: false, loading: () => <p>LOADING COMPONENTS</p> });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
