import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AcZ0pv3NjfRu-errPKZZCtr8PAFKkEwJ1pAsb0SA03wbO9tkfkzLuB6yt3IDil8BWghlWDYbL9mxvh3f",
        currency: "GBP",
      }}
    >
      <Navbar>
        <Component {...pageProps} />
        <Footer></Footer>{" "}
      </Navbar>
    </PayPalScriptProvider>
  );
}

export default MyApp;
