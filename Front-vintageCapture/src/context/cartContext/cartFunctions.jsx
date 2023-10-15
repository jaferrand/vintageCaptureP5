export const addCartItem = (cartItems, productToAdd) => {
    //busca si cartItems contiene productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem._id === productToAdd._id
    );

    // si encuentra, incremeneta cantidad(quantity)
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem._id === productToAdd._id 
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }

    // retorna un nuevo array con cartItems modificados.
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
    //encontrar el articulo del carrito para eliminar
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem._id === cartItemToRemove._id
    );
    //verificar que la cantidad sea 1, al llegar a 0 eliminar el articulo o item del carrito
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem._id !== cartItemToRemove._id);
    }


    // retornar cartItems con la cantidad reducida
    return cartItems.map((cartItem) => 
            cartItem._id === cartItemToRemove._id 
            ? {...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id)
}



