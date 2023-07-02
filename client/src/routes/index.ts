import routes from "../config/routes";
import AboutPage from "../pages/About/AboutPage";
import AddCategoryPage from "../pages/Admin/CategoryAdd/AddCategoryPage";
import CategoryManagementPage from "../pages/Admin/CategoryManagement/CategoryManagementPage";
import UpdateCategoryPage from "../pages/Admin/CategoryUpdate/UpdateCategoryPage";
import DashboardPage from "../pages/Admin/Dashboard/DashboardPage";
import AddProductPage from "../pages/Admin/ProductAdd/AddProductPage";
import ProductManagementPage from "../pages/Admin/ProductManagement/ProductManagementPage";
import UpdateProductPage from "../pages/Admin/ProductUpdate/UpdateProductPage";
import BlogsPage from "../pages/Blog/BlogsPage";
import BlogDetailPage from "../pages/BlogDetail/BlogDetailPage";
import ShopingCartPage from "../pages/Cart/ShopingCartPage";
import ContactPage from "../pages/Contact/ContactPage";
import HomePage from "../pages/Home/HomePage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import ProductsPage from "../pages/Products/ProductsPage";

export const publicRoutes = [
  { path: routes.home, Comment: HomePage },
  { path: routes.products, Comment: ProductsPage },
  { path: routes.productDetail, Comment: ProductDetailPage },
  { path: routes.cart, Comment: ShopingCartPage },
  { path: routes.about, Comment: AboutPage },
  { path: routes.blog, Comment: BlogsPage },
  { path: routes.blogDetail, Comment: BlogDetailPage },
  { path: routes.contact, Comment: ContactPage },
];

export const privateRoutes = [
  { path: routes.admin, Comment: DashboardPage },
  {
    path: routes.adminProducts,
    Comment: ProductManagementPage,
  },
  {
    path: routes.adminProductsAdd,
    Comment: AddProductPage,
  },
  {
    path: routes.adminProductsUpdate,
    Comment: UpdateProductPage,
  },
  {
    path: routes.adminCategory,
    Comment: CategoryManagementPage,
  },
  {
    path: routes.adminCategoryAdd,
    Comment: AddCategoryPage,
  },
  {
    path: routes.adminCategoryUpdate,
    Comment: UpdateCategoryPage,
  },
];
