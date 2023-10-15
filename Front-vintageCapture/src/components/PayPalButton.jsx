import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import CartContext from '../context/cartContext/cartContext';
import { useNavigate } from 'react-router-dom';
import ProductContext from "../context/products/ProductContext";

export default function PayPal() {

    const { cartTotal, clearItemsFromCheckout, cartItems } = useContext(CartContext);
    const { reduceStock } = useContext(ProductContext)
    const navigate = useNavigate();



    console.log(cartTotal)

    return (
        <PayPalScriptProvider options={{ "client-id": "ATfbGLm8CMtAYogpzSGcIYBQJxMJaDBGQGMNRzZekLim-ECKoSmEcCDpM4NvO8zoqdEk3gDTwSmxsMId" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "USD"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;

                        alert(`Transaction completed by ${name}`);
                        reduceStock(cartItems)
                        clearItemsFromCheckout()
                        // console.log(cartItems)

                    });
                }}
            />
        </PayPalScriptProvider>
    );
}