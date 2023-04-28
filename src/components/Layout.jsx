import Footer from "./Footer";

const Layout = ({ preview, children }) => {
  return (
    <>
      <div className="p-5">
        <main className="p-10">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
