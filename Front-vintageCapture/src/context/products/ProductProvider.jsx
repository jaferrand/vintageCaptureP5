import { useReducer } from 'react'

import axiosClient from "../../config/axiosClient"

import ProductContext from "./ProductContext"
import productReducers from "./ProductReducer"

const ProductProvider = ({ children }) => {

    const initialState = {
        products: [],
        product: [{
            id_: "",
            marca: "",
            modelo: "",
            year: "",
            formato_Pel: "",
            estado: "",
            precio: "",
            foto: "",
            stock: ""
        }]
    }

    const [productState, dispatch] = useReducer(productReducers, initialState)

    const getProduct = async (id) => {

        const result = await axiosClient.get(`/products/${id}`)

        const product = result.data.info

        dispatch({
            type: "GET_PRODUCT",
            payload: product
        })
        return product;
    }


    const getProducts = async () => {

        const result = await axiosClient.get("/products")

        dispatch({
            type: "GET_PRODUCTS",
            payload: result.data.info
        })

    }

    const reduceStock = async (cartItems) => {
        try {
            const objetos = { cartItems }
            console.log(objetos)
            const result = await axiosClient.put("/products/reduce", { cartItems });
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ProductContext.Provider
            value={{
                products: productState.products,
                product: productState.product,
                getProduct,
                getProducts,
                reduceStock
            }}
        >
            {children}
        </ProductContext.Provider>
    )

}


export default ProductProvider