import ProductList from "../../components/ProductList/ProductList";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Categories />
      <ProductList _limit={8} title="PRODUCT OVERVIEW" />;
    </>
  );
};

export default HomePage;
