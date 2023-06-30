import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Footer/Footer";
// import Header from "../../Header/Header";
import ProductDetailSub from "../../ProductList/ProductDetailSub/ProductDetailSub";
// import ProductList from "../../ProductList/ProductList";
// import Categories from "../../Categories/Categories";

const BaseLayout = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div id="alll" className="all">
        {/* <Header /> */}
        {/* end header */}
        {/* <Categories /> */}
        <Outlet />

        <Footer />
        {/* <!-- end footer --> */}
      </div>
      {/*  */}
      <ProductDetailSub
        isClicked={isClicked}
        handleShowProductDetail={handleClick}
      />
    </>
  );
};

export default BaseLayout;
