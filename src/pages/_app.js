import { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import CustomFont from "@assets/fonts";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <ThemeProvider attribute="class">
      <main className={`${CustomFont} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.ReactElement,
  pageProps: PropTypes.any,
};
