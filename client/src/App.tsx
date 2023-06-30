import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import AdminLayout from "./components/Layouts/AdminLayout/adminLayout";
import BaseLayout from "./components/Layouts/BaseLayout/baseLayout";
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
  return (
    <>
      <Routes>
        {/* Client */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          {/* Products */}
          <Route path="products">
            <Route index element={<ProductsPage />} />
            {/* Product detail */}
            <Route path=":id" element={<ProductDetailPage />} />
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
            <Route index element={<ProductManagementPage />} />
            {/* Product add */}
            <Route path="add" element={<AddProductPage />} />
            {/* Product update */}
            <Route path="update/:id" element={<UpdateProductPage />} />
          </Route>
          {/* end products */}
          {/* category */}
          <Route path="category">
            <Route index element={<CategoryManagementPage />} />
            {/* category add */}
            <Route path="add" element={<AddCategoryPage />} />
            {/* category update */}
            <Route path="update/:id" element={<UpdateCategoryPage />} />
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
