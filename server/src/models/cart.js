import { Schema, model, Types } from "mongoose";

const cartSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User" },
    products: [
      {
        productId: { type: Types.ObjectId, ref: "Product" },
        quantity: Number,
        price: Number,
      },
    ],
    shippingFee: Number,
    totalPrice: Number,
    totalOrder: Number,
    createdAt: Date,
    updatedAt: Date,
  },
  { versionKey: false, timestamps: true }
);

export default model("Cart", cartSchema);
