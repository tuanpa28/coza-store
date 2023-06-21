import ProductList from "../../components/ProductList/ProductList";
import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";
import IProduct from "../../interfaces/product";
import { useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <>
      <HeaderTop className="shadow" />
      <ProductList
        _limit={12}
        products={products}
        setProducts={setProducts}
        className="mt-30"
      />
      {/* <!-- end product overview --> */}
    </>
  );
};

export default ProductsPage;
