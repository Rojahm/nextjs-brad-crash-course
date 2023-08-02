import Footer from "./Footer";
import Head from "./Head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Head />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
