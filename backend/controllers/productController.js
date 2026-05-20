import Product from "../models/Product.js";

export const getAllProducts =async(req,res)=>{
    try{
        const products=await Product.find().populate("collections");
        res.json(products);
    }catch(err){
res.status(500).json({
    message:"Server Error"
});
    }
}