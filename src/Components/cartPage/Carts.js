import React from "react";
import ProductHeader from "../ProductPage/ProductHeader";
import Logo from "../../images/bg.jpg";

function Carts() {
  return (
    <div className="">
      <ProductHeader />

      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
        {/* Total Cart Amount */}
        <h1 className="text-xl font-bold mb-5">Total Cart Amount: $51</h1>
        {/* Cart Item 1 */}
        <div className="flex w-full max-w-lg gap-10 shadow-md bg-white rounded-lg p-4 mb-5">
          <img
            src={Logo} /* Replace with your image source */
            alt="Peace Lily"
            className="w-28 h-auto object-cover rounded-md m-0"
          />
          <div className="flex flex-col justify-between w-full">
            <h2 className="font-bold text-lg">Peace Lily</h2>
            <p className="text-gray-600">$15</p>
            <div className="flex items-center gap-2">
              <button className="bg-gray-400 px-3 py-1 rounded-md hover:bg-gray-500 text-white font-bold">
                -
              </button>
              <span className="font-bold">2</span>
              <button className="bg-gray-400 px-3 py-1 rounded-md hover:bg-gray-500 text-white font-bold">
                +
              </button>
            </div>
            <p className="text-gray-700">Total: $30</p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 w-28 ">
              Remove
            </button>
          </div>
        </div>

        {/* Cart Item 2 */}
        <div className="flex w-full max-w-lg gap-10 shadow-md bg-white rounded-lg p-4 mb-5">
          <img
            src={Logo} /* Replace with your image source */
            alt="Peace Lily"
            className="w-28 h-auto object-cover rounded-md m-0"
          />
          <div className="flex flex-col justify-between w-full">
            <h2 className="font-bold text-lg">Peace Lily</h2>
            <p className="text-gray-600">$15</p>
            <div className="flex items-center gap-2">
              <button className="bg-gray-400 px-3 py-1 rounded-md hover:bg-gray-500 text-white font-bold">
                -
              </button>
              <span className="font-bold">2</span>
              <button className="bg-gray-400 px-3 py-1 rounded-md hover:bg-gray-500 text-white font-bold">
                +
              </button>
            </div>
            <p className="text-gray-700">Total: $30</p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 w-28 ">
              Remove
            </button>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <button className="bg-green-500 text-white font-bold px-6 py-2 rounded-md hover:bg-green-600">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Carts;
