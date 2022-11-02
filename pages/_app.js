import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "../server/firebase";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
