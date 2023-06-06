import instance from "./config";
import IProduct from "../interfaces/product";
import Cookies from "js-cookie";

const options = () => {
  return {
    headers: {
      Authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  };
};

const getProducts = (opctions?: string) => {
  return instance.get(`products${opctions ?? ""}`);
};

const getProduct = (id: string) => {
  return instance.get(`products/${id}`);
};

const createProduct = (product: IProduct) => {
  return instance.post(`products`, product, options());
};

const updateProduct = (product: IProduct) => {
  return instance.put(`products/${product._id}`, product, options());
};

const deleteProduct = (id: string) => {
  return instance.delete(`products/${id}`, options());
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
