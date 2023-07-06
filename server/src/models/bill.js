import { Schema, model, Types } from "mongoose";

const billSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User" },
    cartId: { type: Types.ObjectId, ref: "Cart" },
    shippingAddress: String,
    shippingFee: Number,
    totalPrice: Number,
    totalOrder: Number,
    paymentMethod: String,
    orderNotes: { type: String, default: "Customer does not write anything." },
    products: [
      {
        productId: { type: Types.ObjectId, ref: "Product" },
        quantity: Number,
        price: Number,
      },
    ],
    paymentStatus: {
      type: String,
      enum: ["Paid", "UnPaid"],
      default: "UnPaid",
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Delivering", "Delivered"],
      default: "Pending",
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

export default model("Bill", billSchema);
