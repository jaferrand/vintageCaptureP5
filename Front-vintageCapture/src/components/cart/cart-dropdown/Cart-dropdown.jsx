import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import CartContext from '../../../context/cartContext/cartContext';
import { Button } from '@mui/material';
import CartItem from '../cart-item/Cart-item';
import './Cart-dropdown.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate(); // Obtiene la función de navegación

    // Función para redirigir a la página del carrito
    const goToCartCheckoutHandler = () => {
        navigate('/cart'); // Redirige a la ruta '/cart'
    }

    console.log(cartItems);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Tu carrito está vacío</span>
                )}
            </div>
            <Button onClick={goToCartCheckoutHandler}>IR AL CARRITO</Button>
        </div>
    );
};

export default CartDropdown;
