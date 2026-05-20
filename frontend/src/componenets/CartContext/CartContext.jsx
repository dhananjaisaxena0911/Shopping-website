import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [hasLoaded,setHasLoaded] = useState(false);
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/cart");
                const loadedItem = res.data?.items || [];
                const mapped = loadedItem.map(item => ({
                    id: item.productId._id,
                    name: item.productId.name,
                    price: item.productId.price,
                    image: item.productId.images[0],
                    size: item.size,
                    color: item.color,
                    quantity: item.quantity,
                    selectedImage:item.selectedImage||item.productId.images[0],
                }));
                setCartItems(mapped);
                setHasLoaded(true);
            }
            catch (err) {
                console.error("Failed to fetch cart:", err);
            }
        };
        fetchCart();
    }, []);

    useEffect(() => {
        if(!hasLoaded) return;
        const saveCart = async () => {
            try {
                const payload = cartItems.map(item => ({
                    productId: item.id,
                    quantity: item.quantity,
                    size: Array.isArray(item.size) ? item.size[0] : item.size,
                    color: item.color,
                    selectedImage:item.selectedImage||item.image,
                }));
                await axios.post("http://localhost:5000/api/cart", { items: payload });
            }
            catch (err) {
                console.error("Failed to save cart:", err);
            }
        };
        
            saveCart();
    }, [cartItems,hasLoaded]);

    const addToCart = (product) => {
        const normalizedProduct = {
            ...product,
            id: product.id || product._id,
            size: Array.isArray(product.size) ? product.size[0] : product.size,
            color: product.color,
        };

        setCartItems((prev) => {
            const exists = prev.find(
                (item) =>
                    item.id === normalizedProduct.id &&
                    item.size === normalizedProduct.size &&
                    item.color === normalizedProduct.color
            );

            if (exists) {
                return prev.map((item) =>
                    item.id === normalizedProduct.id &&
                        item.size === normalizedProduct.size &&
                        item.color === normalizedProduct.color
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...normalizedProduct, quantity: 1 }];
        });
    };



    // const updateQuantity = (id, quantity) => {
    //     setCartItems((prev) =>
    //         prev.map((item) =>
    //             item.id === id ? { ...item, quantity } : item
    //         )
    //     );
    // };

    const updateQuantity=(id,size,color,selectedImage,quantity)=>{
        setCartItems((prev)=>
            prev.map((item)=>
                item.id===id &&
                item.size===size &&
                item.color===color &&
                item.selectedImage===selectedImage
                    ?{...item,quantity}
                    :item
            )
        );
    };

    const removeFromCart = (id, size, color, selectedImage) => {
        setCartItems((prev) =>
             prev.filter(
                (item) =>
                     !(
                        item.id === id &&
                    item.size === size &&
                    item.color === color &&
                    item.selectedImage === selectedImage
                     )
            ));
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
