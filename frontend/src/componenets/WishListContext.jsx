// import { createContext,useState,useContext } from "react";

// const WishListContext=createContext();


// export const WishListProvider=({children})=>{
//     const [wishlist, setWishlist] = useState([]);

//   const toggleWishlist = (product) => {
//     setWishlist((prev) =>
//       prev.some((item) => item._id === product._id)
//         ? prev.filter((item) => item._id !== product._id)
//         : [...prev, product]
//     );
//   };

//   const isInWishList=(productId)=>
//     wishlist.some((item)=>item.id===productId);

//   return(
//     <WishListContext.Provider value={{wishlist,toggleWishlist,isInWishList}}>{children}</WishListContext.Provider>
//   );
// };

// export const useWishList=()=>useContext(WishListContext);