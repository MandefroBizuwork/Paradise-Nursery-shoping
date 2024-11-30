import React from "react";
import ProductHeader from "../ProductPage/ProductHeader";
import Logo from "../../images/bg.jpg";
import { useSelector,useDispatch } from "react-redux";
import {cartIncrement,cartDecrement,removeFromcart,clearCart} from '../Redux/MyCartSlice'


function Carts() {
  const dispatch=useDispatch()
  const items=useSelector((item)=>item.myCart.cartItems)
  const totalAmount=items.reduce((total,item)=>total+item.quantity*item.price,0)
const IncreaseQuantity=(itemID)=>{
 dispatch(cartIncrement(itemID))
}
const DecreaseQuantity=(itemID)=>{
  dispatch(cartDecrement(itemID))
 }
 const RemovecartItem=(itemID)=>{
  dispatch(removeFromcart(itemID))
 }
 const clearYourCart=()=>{
  dispatch(clearCart())
 }
 
 
  return (
    <div className="">
      <ProductHeader />

      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
        {/* Total Cart Amount */}
       
        {/* Cart Item 1 */}
       {items.length===0?(<p>No items inyour cart</p>):
       (<>
        <h1 className="text-xl font-bold mb-5">Total Cart Amount: {totalAmount}</h1>
       {
        items.map((item,key)=>(
          <div key={key} className="flex w-full max-w-lg gap-36 shadow-md bg-white rounded-lg mb-5">
          <img
            src={item.imageUrl} /* Replace with your image source */
            alt="Peace Lily"
            className="w-full h-auto object-cover rounded-md   "
          />
          <div className="flex flex-col gap-5 w-full py-5">
            <h2 className="font-bold text-lg">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <div className="flex items-center gap-2">
              <button 
              onClick={()=>DecreaseQuantity(item.id)}
              className="bg-gray-400 px-3 py-1 rounded-md hover:bg-gray-500 text-white font-bold">
                -
              </button>
              <span className="font-bold">{item.quantity}</span>
              <button
               onClick={()=>IncreaseQuantity(item.id)}
              className="bg-gray-400 px-3 py-1 rounded-md hover:bg-gray-500 text-white font-bold">
                +
              </button>
            </div>
            <p className="text-gray-700">Total cost:{item.quantity*item.price}</p>
            <button 
            onClick={()=>RemovecartItem(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 w-28 mb-2 ">
              Remove
            </button>
          </div>
        </div>

        )
      
      )
   
}
        </>)
        }

      

        {/* Continue Shopping Button */}
        <div className="flex gap-10 ">

        <button className="bg-green-500 text-white font-bold px-6 py-2 rounded-md hover:bg-green-600">
          Continue Shopping
        </button>
        <button
        onClick={clearYourCart}
        className="bg-orange-500  text-white font-bold px-6 py-2 rounded-md hover:bg-orange-700">
          Clear your cart
        </button>
        </div>
      </div>
    </div>
  );
}

export default Carts;
