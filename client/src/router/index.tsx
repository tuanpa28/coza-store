import { Navigate, createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/Layouts/BaseLayout/baseLayout";
import AdminLayout from "../components/Layouts/AdminLayout/adminLayout";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import ProductsPage from "../pages/Products/ProductsPage";
import DashboardPage from "../pages/Admin/Dashboard/DashboardPage";
import ProductManagementPage from "../pages/Admin/ProductManagement/ProductManagementPage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import ShopingCartPage from "../pages/Cart/ShopingCartPage";
import AboutPage from "../pages/About/AboutPage";
import BlogsPage from "../pages/Blog/BlogsPage";
import BlogDetailPage from "../pages/BlogDetail/BlogDetailPage";
import ContactPage from "../pages/Contact/ContactPage";
import SigninPage from "../pages/Signin/SigninPage";
import SignupPage from "../pages/Signup/SignupPage";
import AddProductPage from "../pages/Admin/ProductAdd/AddProductPage";
import UpdateProductPage from "../pages/Admin/ProductUpdate/UpdateProductPage";
import CategoryManagementPage from "../pages/Admin/CategoryManagement/CategoryManagementPage";
import AddCategoryPage from "../pages/Admin/CategoryAdd/AddCategoryPage";
import UpdateCategoryPage from "../pages/Admin/CategoryUpdate/UpdateCategoryPage";

const router = createBrowserRouter([
  // Client
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        children: [
          { index: true, element: <ProductsPage /> },
          { path: ":id", element: <ProductDetailPage /> },
        ],
      },
      { path: "shoping-cart", element: <ShopingCartPage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "blog",
        children: [
          { index: true, element: <BlogsPage /> },
          { path: ":id", element: <BlogDetailPage /> },
        ],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  // Admin
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "products",
        children: [
          { index: true, element: <ProductManagementPage /> },
          { path: "add", element: <AddProductPage /> },
          { path: "update/:id", element: <UpdateProductPage /> },
        ],
      },
      {
        path: "category",
        children: [
          { index: true, element: <CategoryManagementPage /> },
          { path: "add", element: <AddCategoryPage /> },
          { path: "update/:id", element: <UpdateCategoryPage /> },
        ],
      },
    ],
  },

  { path: "signin", element: <SigninPage /> },
  { path: "signup", element: <SignupPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
