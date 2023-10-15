import { useContext } from "react";

import CartContext from "../../context/cartContext/cartContext";
import CheckoutItem from "../../components/cart/checkout-item/Checkout-item";


import "./Cart.scss";
import PayPal from "../../components/PayPalButton";

const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  console.log(cartItems)


  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Producto</span>
        </div>
        <div className="header-block">
          <span>Descripción</span>
        </div>
        <div className="header-block">
          <span>Cantidad</span>
        </div>
        <div className="header-block">
          <span>Precio</span>
        </div>
        <div className="header-block">
          <span>Quitar</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
      {/* {cartItems.length ? (
          <PayPalButtons
            createOrder={(data, actions) => {
              console.log('creando orden')
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: '1.99',
                      currency_code: 'CL'
                    }
                  }
                ]
              })
            }}
            onApprove={(data, actions) => {
              console.log('orden completada')
              return actions.order.capture().then((details) => {
                console.log(details)
                const name = details.payer.name.given_name
                alert(`Transaction completed by ${name}`);
                clearItemFromCart()
              })
            }}
          />
        ) : null} */}
      {cartItems.length ? <PayPal /> : null}
    </div>
  );
};

export default Cart;