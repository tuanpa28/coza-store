const routes = {
  // client
  home: "/",
  products: "/products",
  productDetail: "/products/:id",
  cart: "/shoping-cart",
  about: "/about",
  blog: "/blog",
  blogDetail: "/blog/:id",
  contact: "/contact",
  // auth
  signin: "/signin",
  signup: "/signup",
  // admin
  admin: "/admin",
  adminProducts: "/admin/products",
  adminProductsAdd: "/admin/products/add",
  adminProductsUpdate: "/admin/products/update/:id",
  adminCategory: "/admin/category",
  adminCategoryAdd: "/admin/category/add",
  adminCategoryUpdate: "/admin/category/update/:id",

  notFound: "*",
};

export default routes;
