import mongoose from "mongoose";
import Favourite from "../models/FavouritesModel.js";

export const getFavourite = async (req, res) => {
    try {
        const fav = await Favourite.findOne().populate('gifts.productId');
        if (!fav) {
            return res.status(404).json({
                message: "Favorite Not Found",
            });
        }
        res.json(fav || {
            gifts: []
        });
    } catch (err) {
        console.error("Error in getFavourite", err.message);
        res.status(500).json({
            error: err.message
        });

    }
};

export const updateFavourite = async (req, res) => {
    try {
        const { gifts } = req.body;

        if (!Array.isArray(gifts)) {
            return res.status(400).json({ error: "Gifts must be an array" });
        }

        const validGifts = gifts.map(gift => {
            if (!mongoose.Types.ObjectId.isValid(gift.productId)) {
                throw new Error(`Invalid productId: ${gift.productId}`);
            }

            return {
                productId: new mongoose.Types.ObjectId(gift.productId)
            };
        });

        let fav = await Favourite.findOne();

        if (!fav) {
            fav = new Favourite({ gifts: [] });
        } else {
            validGifts.forEach(({ productId }) => {
                const alreadyExists = fav.gifts.some(
                    g => g.productId.toString() === productId.toString()
                );
                if (!alreadyExists) {
                    fav.gifts.push({ productId });
                }
            });
        }

        await fav.save();
        res.status(200).json({ message: "Added to favourites", data: fav });

    } catch (err) {
        console.error("Error in updateFavourite", err.message);
        res.status(500).json({ error: err.message });
    }
};


export const clearFav = async (req, res) => {
    try {
        const favourite = await Favourite.findOne();
        if (!favourite) {
            return res.status(404).json({
                message: "No Favourite Found"
            });
        }
        favourite.gifts = [];
        await favourite.save();
        res.json({
            message: "Favourite cleared"
        });
    } catch (err) {
        console.error("Error in DeleteFavorite", err.message);
        res.status(500).json({
            error: err.message
        });
    }
};