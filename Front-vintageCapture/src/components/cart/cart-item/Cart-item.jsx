import './Cart-item.scss';

const CartItem = ({ cartItem }) => {
  const { foto, precio, marca, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={foto} alt={`${marca}`} />
      <div className='item-details'>
        <span className='name'>{marca}</span>
        <span className='price'>
          {quantity} x ${precio}
        </span>
      </div>
    </div>
  );
};

export default CartItem;