import "normalize.css";
import "../scss/main.scss";
import "animate.css";
import Layout from "./layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
