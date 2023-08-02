import Footer from "./Footer";
import Head from "./Head";
import Nav from "./Nav";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Head />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
