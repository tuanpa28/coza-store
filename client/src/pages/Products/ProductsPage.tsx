import IProduct from "../../interfaces/product";
// import React, { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";

interface IProductsPage {
  products: IProduct[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: any;
}

const ProductsPage = ({ products, searchParams }: IProductsPage) => {
  // const [searchText, setSearchText] = useState("");
  const onHandleSubmit = (value: string) => {
    searchParams.set("_searchText", value);
    window.location.href = `http://localhost:5173/products?${searchParams.toString()}`;
  };

  return (
    <>
      <HeaderTop className="shadow" />
      <ProductList className="mt-30" />
      {/* <!-- end product overview --> */}
    </>
  );
};

export default ProductsPage;
