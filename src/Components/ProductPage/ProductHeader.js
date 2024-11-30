import React from "react";
import Logo from "../../images/logo.jpg";
import Cart from "../../images/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductHeader() {
  const cartItems = useSelector((state) => state.myCart.cartItems || []);
  const totalItems = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
  console.log(cartItems,totalItems)

  return (
    <div className="bg-green-500 relative flex flex-wrap items-center justify-between p-4">
      {/* Left Section: Logo and Text */}
      <div className="flex items-center gap-6 w-full md:w-auto text-white text-center md:text-left">
        <img
          src={Logo}
          alt="Paradise Nursery Logo"
          className="rounded-full h-16"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Paradise Nursery</h1>
          <h2>
            <i>Welcome to plants</i>
          </h2>
        </div>
      </div>

      {/* Center Section: Title */}
      <div className="text-white p-4 text-center w-full md:w-auto">
        <h1 className="text-2xl font-semibold">Plants</h1>
      </div>

      {/* Right Section: Cart */}
      <div className="text-white p-4 text-center w-full md:w-auto relative">
        <Link to="/Carts" className="cursor-pointer hover:text-gray-300">
          <img className="h-10" src={Cart} alt="Cart icon" />
          <span className="absolute left-8 top-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
            {totalItems}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ProductHeader;
