import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import 'rsuite/dist/rsuite.min.css';

function MyApp({ Component, pageProps }) {
  return(<ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>);
}

export default MyApp;
