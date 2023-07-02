// import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { ReactNode } from "react";
// import Header from "../../Header/Header";

// import ProductList from "../../ProductList/ProductList";
// import Categories from "../../Categories/Categories";

interface IBaseLayout {
  children: ReactNode;
}

const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <div id="alll" className="all">
      {/* <Header /> */}
      {/* end header */}
      {/* <Categories /> */}
      {/* <Outlet /> */}
      {children}

      <Footer />
      {/* <!-- end footer --> */}
    </div>
  );
};

export default BaseLayout;
