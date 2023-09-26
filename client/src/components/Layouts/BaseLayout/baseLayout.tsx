import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
// import Header from "../../Header/Header";

// import ProductList from "../../ProductList/ProductList";
// import Categories from "../../Categories/Categories";

const BaseLayout = () => {
  return (
    <div id="alll" className="all">
      {/* <Header /> */}
      {/* end header */}
      {/* <Categories /> */}
      <Outlet />

      <Footer />
      {/* <!-- end footer --> */}
    </div>
  );
};

export default BaseLayout;
