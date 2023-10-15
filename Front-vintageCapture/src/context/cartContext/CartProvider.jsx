import React from 'react';
import { useReducer } from 'react';
import cartReducers from "./cartReducers";
import CartContext from './cartContext';
import { addCartItem, removeCartItem, clearCartItem, clearCheckoutItems } from './cartFunctions';

const CartProvider = ({children}) => {
    const initialState = {
        isCartOpen: false,
        cartItems: [],
        cartCount: 0,
        cartTotal: 0
    }

    const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(cartReducers, initialState);


    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount =  newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.precio, 0)

        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount
            }
        })
    
    }
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems)
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems)
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems)
    }

    const clearItemsFromCheckout = () => {
        dispatch({
            type: "CLEAR_CHECKOUT",
        })
       
    }

    const setIsCartOpen = (bool) => {
        dispatch({ type: "SET_IS_CART_OPEN", payload: bool})
    }

  return (
    <CartContext.Provider value={{isCartOpen, cartTotal, cartItems, cartCount, setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart, clearItemsFromCheckout}}> {children} </CartContext.Provider>
  )
}

export default CartProvider;