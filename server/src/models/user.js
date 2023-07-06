import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, minLength: 4, maxLength: 255 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "member"],
      default: "member",
    },
    cartId: { type: Types.ObjectId, ref: "Cart" },
    billsId: [{ type: Types.ObjectId, ref: "Bill" }],
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true, versionKey: false }
);

export default model("User", userSchema);
