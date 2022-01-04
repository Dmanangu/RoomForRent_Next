import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <StoreProvider>
          <PayPalScriptProvider deferLoading={true}>
            <Component {...pageProps} />
          </PayPalScriptProvider>
        </StoreProvider>
      </SnackbarProvider>
    </Provider>
  );
}

export default MyApp;
