import instance from "./config";
import ICategory from "../interfaces/category";
import Cookies from "js-cookie";

const options = () => {
  return {
    headers: {
      Authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  };
};

const getCategories = () => {
  return instance.get(`categories`);
};

const getCategory = (id: string) => {
  return instance.get(`categories/${id}?_embed=products`);
};

const createCategory = (category: ICategory) => {
  return instance.post(`categories`, category, options());
};

const updateCategory = (category: ICategory) => {
  return instance.put(`categories/${category._id}`, category, options());
};

const deleteCategory = (id: string) => {
  return instance.delete(`categories/${id}`, options());
};

export {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
