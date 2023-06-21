import ProductList from "../../components/ProductList/ProductList";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import { getCategory } from "../../api/category";
import { useState } from "react";
import IProduct from "../../interfaces/product";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const onHandleGetOneCategory = async (id: string) => {
    try {
      const { data } = await getCategory(id);
      setProducts(data.category.productId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <Categories onHandleGetOneCategory={onHandleGetOneCategory} />
      <ProductList
        _limit={8}
        setProducts={setProducts}
        products={products}
        title="PRODUCT OVERVIEW"
      />
      ;
    </>
  );
};

export default HomePage;
