import mongoose, { Schema } from "mongoose";

const TranslationSchema = new Schema({
  en: String,
  de: String,
  ru: String,
});

const PriceSchema = new Schema({
  eur: Number,
  rub: Number,
});

const ProductSchema = new Schema(
  {
    title: {
      type: TranslationSchema,
      required: true,
    },
    prices: {
      type: PriceSchema,
      required: true,
    },
    cardImage: { type: String },
    images: { type: [String] },
    description: {
      type: TranslationSchema,
    },
    category: { type: String, required: true },
    isNewProduct: { type: Boolean, required: true, default: false },
    discountRate: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
