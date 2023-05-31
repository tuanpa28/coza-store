import ProductList from "../../components/ProductList/ProductList";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";

interface IHomePage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick: any;
}

const HomePage = () => {
  return (
    <>
      <Header />
      <Categories />
      <ProductList title="PRODUCT OVERVIEW" />;
    </>
  );
};

export default HomePage;
