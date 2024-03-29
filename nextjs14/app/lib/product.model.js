import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
        },
        img: {
            type: String,
        },
        color: {
            type: String,
        },
        size: {
            type: String
        },
    },
    { timestamps: true }
);

const Products = mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Products;
