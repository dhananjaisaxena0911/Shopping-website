import mongoose from "mongoose";
import Cart from "../models/cartModel.js";

// GET the single shared cart
export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne().populate('items.productId');
        if (!cart) {
            return res.status(404).json({ message: "Cart not found, initializing a new cart." });
        }
        res.json(cart || { items: [] });
    } catch (err) {
        console.error("❌ Error in getCart:", err.message);
        res.status(500).json({ error: err.message });
    }
};

// UPDATE or CREATE the shared cart (replaces existing items)
export const updateCart = async (req, res) => {
    try {
        const { items } = req.body;

        if (!Array.isArray(items)) {
            return res.status(400).json({ error: "Items must be an array." });
        }

        const validItems = items.map(item => {
            if (!mongoose.Types.ObjectId.isValid(item.productId)) {
                throw new Error(`Invalid productId: ${item.productId}`);
            }
            return {
                productId: new mongoose.Types.ObjectId(item.productId),
                quantity: item.quantity,
                size: item.size,
                color: item.color,
                selectedImage:item.selectedImage,
            };
        });

        const cart = await Cart.findOneAndUpdate(
            {}, // Match any (the single) cart document
            { items: validItems },
            { new: true, upsert: true } // Create if not found
        ).populate('items.productId');

        res.json(cart);
    } catch (err) {
        console.error("❌ Error in updateCart:", err.message);
        res.status(500).json({ error: err.message });
    }
};

export const clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne();
        if (!cart) {
            return res.status(404).json({ message: "No cart found to clear." });
        }
        cart.items = [];
        await cart.save();
        res.json({ message: "Cart cleared" });
    } catch (err) {
        console.error("❌ Error in clearCart:", err.message);
        res.status(500).json({ error: err.message });
    }
};
