import { message } from "antd";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "./api/category";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "./api/product";
import { deleteImages } from "./api/upload";
import "./assets/css/style.css";
import AdminLayout from "./components/Layouts/AdminLayout/adminLayout";
import BaseLayout from "./components/Layouts/BaseLayout/baseLayout";
import ICategory from "./interfaces/category";
import IProduct from "./interfaces/product";
import AddCategoryPage from "./pages/Admin/CategoryAdd/AddCategoryPage";
import CategoryManagementPage from "./pages/Admin/CategoryManagement/CategoryManagementPage";
import UpdateCategoryPage from "./pages/Admin/CategoryUpdate/UpdateCategoryPage";
import DashboardPage from "./pages/Admin/Dashboard/DashboardPage";
import AddProductPage from "./pages/Admin/ProductAdd/AddProductPage";
import ProductManagementPage from "./pages/Admin/ProductManagement/ProductManagementPage";
import UpdateProductPage from "./pages/Admin/ProductUpdate/UpdateProductPage";
import BlogDetailPage from "./pages/BlogDetail/BlogDetailPage";
import ShopingCartPage from "./pages/Cart/ShopingCartPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import ProductsPage from "./pages/Products/ProductsPage";
import SigninPage from "./pages/Signin/SigninPage";
import SignupPage from "./pages/Signup/SignupPage";
import AboutPage from "./pages/About/AboutPage";
import BlogsPage from "./pages/Blog/BlogsPage";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  // Get Categories
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await getCategories();
        setCategories(categories.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Get Products
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await getProducts();
        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Create Product
  const onHandleCreate = async (product: IProduct) => {
    try {
      const { data } = await createProduct(product);

      setProducts([...products, data?.product]);
      message.success(`Thêm sản phẩm thành công!`);
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  // Create Category
  const onHandleCreateCategory = async (category: ICategory) => {
    try {
      const { data } = await createCategory(category);
      setCategories([...categories, data.category]);
      message.success(`Thêm danh mục thành công!`);
      navigate("/admin/category");
    } catch (error) {
      console.log(error);
    }
  };

  // Update Product
  const onHandleUpdate = async (product: IProduct) => {
    try {
      const { data } = await updateProduct(product);
      const newPro = products?.map((item) =>
        item._id === data?.product?._id ? data.product : item
      );
      setProducts(newPro);
      message.success(`Sửa sản phẩm thành công!`);
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  // Update Category
  const onHandleUpdateCategory = async (category: ICategory) => {
    try {
      const { data } = await updateCategory(category);
      const newCate = categories?.map((item) =>
        item._id === data?.category?._id ? data.category : item
      );
      setCategories(newCate);
      message.success(`Sửa danh mục thành công!`);
      navigate("/admin/category");
    } catch (error) {
      console.log(error);
    }
  };

  // Remove Product
  const onHandleRemove = async (id: string) => {
    try {
      const { data } = await deleteProduct(id);
      // call api xóa image

      await deleteImages(data.product.image.publicId);

      data.product.album.map(
        async (item: { url: string; publicId: string }) =>
          await deleteImages(item.publicId)
      );

      const newPro = products?.filter((product) => product._id !== id);
      setProducts(newPro);
      message.success(`Xóa sản phẩm thành công!`);
    } catch (error) {
      console.log(error);
    }
  };

  // Remove Category
  const onHandleRemoveCategory = async (id: string) => {
    try {
      await deleteCategory(id);
      message.success(`Xóa danh mục thành công!`);
      const newCate = categories?.filter((category) => category._id !== id);
      setCategories(newCate);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Routes>
        {/* Client */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          {/* Products */}
          <Route path="products">
            <Route
              index
              element={
                <ProductsPage
                //  products={products} searchParams={searchParams}
                />
              }
            />
            {/* Product detail */}
            <Route
              path=":id"
              element={<ProductDetailPage />}
            />
          </Route>
          {/* end products */}
          {/* shoping cart */}
          <Route path="shoping-cart" element={<ShopingCartPage />} />
          {/* end shoping cart */}
          {/* about */}
          <Route path="about" element={<AboutPage />} />
          {/* end about */}
          {/* blog */}
          <Route path="blog">
            <Route index element={<BlogsPage />} />
            <Route path=":id" element={<BlogDetailPage />} />
          </Route>
          {/* end blog */}
          {/* contact */}
          <Route path="contact" element={<ContactPage />} />
          {/* end contact */}
        </Route>

        {/* signin signup */}
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
        {/* end signin signup */}

        {/* Admin */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          {/* products */}
          <Route path="products">
            <Route
              index
              element={
                <ProductManagementPage
                  onHandleRemove={onHandleRemove}
                  products={products}
                  categories={categories}
                />
              }
            />
            {/* Product add */}
            <Route
              path="add"
              element={
                <AddProductPage
                  onHandleCreate={onHandleCreate}
                  categories={categories}
                />
              }
            />
            {/* Product update */}
            <Route
              path="update/:id"
              element={
                <UpdateProductPage
                  categories={categories}
                  products={products}
                  onHandleUpdate={onHandleUpdate}
                />
              }
            />
          </Route>
          {/* end products */}
          {/* category */}
          <Route path="category">
            <Route
              index
              element={
                <CategoryManagementPage
                  categories={categories}
                  onHandleRemoveCategory={onHandleRemoveCategory}
                />
              }
            />
            {/* category add */}
            <Route
              path="add"
              element={
                <AddCategoryPage
                  onHandleCreateCategory={onHandleCreateCategory}
                />
              }
            />
            {/* category update */}
            <Route
              path="update/:id"
              element={
                <UpdateCategoryPage
                  categories={categories}
                  onHandleUpdateCategory={onHandleUpdateCategory}
                />
              }
            />
          </Route>
          {/* end category */}
        </Route>

        {/* Router Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
