import { IAddToCart, ICheckOut } from "../interfaces/cart";
import instance from "./config";
import Cookies from "js-cookie";

const options = () => {
  return {
    headers: {
      Authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  };
};

const getCarts = () => {
  return instance.get(`cart`, options());
};

const getCartUser = () => {
  return instance.get(`cart/user`, options());
};

const addToCart = (dataCart: IAddToCart) => {
  return instance.post(`cart/add`, dataCart, options());
};

const deleteProductCart = (productId: string) => {
  return instance.delete(`cart/delete/${productId}`, options());
};

const deleteCart = () => {
  return instance.delete(`cart/delete-all`, options());
};

const checkOut = (dataCheckOut: ICheckOut) => {
  return instance.post(`cart/checkout`, dataCheckOut, options());
};

export {
  getCarts,
  getCartUser,
  addToCart,
  deleteProductCart,
  deleteCart,
  checkOut,
};
