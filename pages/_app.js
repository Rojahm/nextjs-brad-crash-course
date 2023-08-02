import Layout from "@/components/Layout";
// add bootstrap css
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="whole">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
