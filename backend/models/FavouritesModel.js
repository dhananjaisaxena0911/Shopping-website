import mongoose from "mongoose";

const giftSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
});

const favouriteSchema = new mongoose.Schema({
    gifts: [giftSchema]
}, { timestamps: true });

export default mongoose.model('Favourite', favouriteSchema);
