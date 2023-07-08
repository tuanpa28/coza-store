export interface IAddToCart {
  productId: string;
  quantity?: number;
}

export interface ICheckOut {
  shippingAddress: string;
  paymentMethod: string;
  orderNotes?: string;
}
