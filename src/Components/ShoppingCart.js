import React from 'react';
import './ShoppingCart.css';
import { useSelector,useDispatch } from 'react-redux';
import CartReducer from "./CartSlice"
import { removeItemFromCart,clearCart,increaseItemQuantity,decreaseItemQuantity } from './CartSlice';
const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  
    const handleRemoveItem = itemId => {
        dispatch(removeItemFromCart(itemId));
      };  
      const handleClearCart = () => {
        dispatch(clearCart());
      };    
      const handleIncreaseQuantity = itemId => {

        dispatch(increaseItemQuantity(itemId));    

        
      };    
      const handleDecreaseQuantity = itemId => {
        dispatch(decreaseItemQuantity(itemId));
      };
  return (
    <div className=" container-fluid mt-5 bg-light shadow py-4">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <div className='d-flex gap-20 align-items-center '>
        <span>Total Amount:{totalAmount}</span>

      <button onClick={handleClearCart} className="btn btn-danger">
        Clear Cart
      </button>
      </div>
      <ul className="">
      {cartItems.map(item => (
            <>
            <li key={item.id} className="d-flex gap-5 my-4  align-items-center">
              <span>Product name:{item.name}<br/><br/>
              
              Total price: ${item.price*item.quantity}</span>
              <div className="quantity-controls d-flex gap-2 my-4  align-items-center">
                <button className="btn btn-secondary" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button className="btn btn-secondary" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
            <hr/>
            </>
          ))}

      </ul>
    
    
    </div>
  );
};

export default ShoppingCart;
