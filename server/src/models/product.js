import { Schema, model, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const Product = new Schema(
  {
    name: { type: String, required: true, text: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: Object, required: true },
    album: [{ type: Object, required: true }],
    quantity: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    categoryId: { type: Types.ObjectId, ref: "Category", required: true },
    createdAt: Date,
    updatedAt: Date,
  },
  { versionKey: false, timestamps: true }
);

Product.index({ name: "text" }); // đăng ký chỉ mục văn bản
Product.plugin(mongoosePaginate);

export default model("Product", Product);
