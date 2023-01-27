import { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import CustomFont from "@assets/fonts";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <Head>
        <title>Design System</title>
      </Head>
      <ThemeProvider attribute="class">
        <main className={`${CustomFont}  font-inter`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.ReactElement,
  pageProps: PropTypes.any,
};
