import { strict } from "assert";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maker: {
            type: String,
            required: true,
        },
        features: {
            type: Array,
            required: false,
        },
        highlight: {
            type: Boolean,
            required: false,
            default: false,
        },
        stock: {
            type: Boolean,
            default: true
        },
        images: {
            type: Array,
            required: false
        }
    },
    {
        timestamps: true,
        strict: true
    },
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;