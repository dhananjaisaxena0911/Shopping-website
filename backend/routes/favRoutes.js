import express from 'express';
import {getFavourite,updateFavourite,clearFav} from "../controllers/FavouriteController.js";

const router=express.Router();

router.get('/',getFavourite);
router.post('/',updateFavourite);
router.delete('/',clearFav);

export default router;