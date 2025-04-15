import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { url } from "../../../admin/src/assets/assets";
//import { food_list } from '../../assets/frontend_assets/assets';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    //const url = "http://localhost:5173"
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if(token)
        {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    };

    const removeFromCart = async(itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token)
            {
                await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
            }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find(product => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        // const response = await axios.get(url + "/api/food/list");
        const response = await axios.get("http://localhost:3000/api/food/list");
        // http://localhost:5173/api/food/list
        console.log("foodlist-->"+response.data.data);
        console.log("foodlist-->"+JSON.stringify(response.data.data));
        console.log("foodlist-->"+JSON.stringify(response));
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) =>{
        const response = await axios.post(url + "/api/cart/add",{itemId},{headers:{token}});
        setCartItems(response.data.cartData);
        }

    
    useEffect(() => {
        
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                    setToken(localStorage.getItem("token"));
                    await loadCartData(localStorage.getItem("token"));
                 }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;