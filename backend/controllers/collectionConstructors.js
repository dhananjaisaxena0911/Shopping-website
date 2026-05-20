import Product from "../models/Product.js";
import Collection from "../models/Collection.js";

const getProductByCollectionName= async(req,res)=>{
    try{
        const {name}=req.params;

        const collection = await Collection.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } }).populate('products');

        if(!collection){
            return res.status(404).json({
                message:"Collections not Found!"
            })
        }
        res.json(collection.products);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

// const getNewThisWeekProducts=async(req,res)=>{
//     try{
//         const {name}=req.params;

//         const collection = await Collection.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } }).populate('products');
//         if(!collection){
//             return res.status(404).json({
//                 message:"New This Week collection not found!"
//             });
//         }
//         res.json(collection.products);
//     }
//     catch(err){
//         res.status(500).json({
//              message: err.message
//              });
//     }
// };

export default getProductByCollectionName;