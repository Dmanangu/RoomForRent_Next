import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { StoreProvider } from "../utils/Store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { Provider } from "react-redux";
import { store } from "../redux/store";

import { Toaster } from "react-hot-toast";
import { UserContext } from "../component/firebase/context";
import { useUserData } from "../component/firebase/hooks";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  //firebase added

  const userData = useUserData();

  return (
    <UserContext.Provider value={{ userData }}>
      <Provider store={store}>
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <StoreProvider>
            <PayPalScriptProvider deferLoading={true}>
              {/*Added for User Auth */}
              <Component {...pageProps} />
              <Toaster /> {/*added Toaster same as Snackbar */}
            </PayPalScriptProvider>
          </StoreProvider>
        </SnackbarProvider>
      </Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
