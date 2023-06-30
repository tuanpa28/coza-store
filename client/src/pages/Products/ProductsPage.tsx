import ProductList from "../../components/ProductList/ProductList";
import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";

const ProductsPage = () => {
  return (
    <>
      <HeaderTop className="shadow" />
      <ProductList _limit={12} className="mt-30" />
      {/* <!-- end product overview --> */}
    </>
  );
};

export default ProductsPage;
