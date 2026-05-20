import mongoose from "mongoose";
import Product from "./models/Product.js";

const MONGO_DB_URL='mongodb://localhost:27017/ClothStore';

const migrateImages=async()=>{
    try{
        await mongoose.connect(MONGO_DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to DataBase");
       const result=await Product.updateMany(
        {image:{$exists:true}},
        [
            { $set: { images: ["$image"] } },
            { $unset: "image" } 
        ]
       );
       console.log(`🛠️ ${result.modifiedCount} products updated successfully`);
       await mongoose.disconnect();
    }
    catch(error){
        console.error("Migration Error",error);
        process.exit(1);
        
    }
};

migrateImages();