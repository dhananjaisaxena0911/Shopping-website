import mongoose from "mongoose";
import Product from "./models/Product.js";

const MONGO_DB_URL = 'mongodb://localhost:27017/ClothStore';

const updateColors = async () => {
    try {
        await mongoose.connect(MONGO_DB_URL);
        console.log("Connected to MongoDB Successfully");

        const updates = [{
                _id: "680c616fca785fc97e94c0b4",
                colors: ["Navy", "White", "Red"]
            },
            {
                _id: "6809de3609ff80f9ed9fd38f",
                colors: ["Navy", "White", "Red"]
            }
        ];

        for (const update of updates) {
            const product = await Product.findById(update._id);
            if (product) {
                product.colors = update.colors; // Updated field name here
                await product.save();
                console.log(`✅ Updated colors for product with ID ${update._id}`);
            } else {
                console.warn(`❌ Product not found with ID ${update._id}`);
            }
        }
        console.log("🎉 Color updates complete.");
    } catch (err) {
        console.error("❌ Error updating colors:", err.message);
    } finally {
        await mongoose.disconnect();
        console.log("🔌 Disconnected from MongoDB");
    }

};

updateColors();
