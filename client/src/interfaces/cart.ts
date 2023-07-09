import IProduct from "./product";

export interface IAddToCart {
  productId: string;
  quantity?: number;
}

export interface ICheckOut {
  shippingAddress: string;
  paymentMethod: string;
  orderNotes?: string;
}

export interface IProductCart {
  productId: IProduct;
  price: number;
  quantity: number;
  _id?: string;
}
