import React from "react";
import ProductHeader from "./ProductHeader";
import Logo from "../../images/logo.jpg";

function ProductPage() {
  return (
    <>
      <ProductHeader />
      <h2 className="mx-auto my-2 sm:max-w-full md:max-w-md lg:w-40 border-gray-400  text-center border-b-2 border-t-2 py-2">
        Air purifying plants
      </h2>

      {/* Grid container for the product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6 mx-auto px-4">
        {/* Product Card 1 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img className="w-full h-48 object-cover " src={Logo} alt="Product" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Product Title
            </h2>
            <p className="text-gray-600 mb-4">
              This is a simple description of the product. It summarizes the key
              features and benefits.
            </p>
            <a
              href="#"
              className="text-white bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 rounded-md transition-all duration-200 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img
            className="w-full h-48 object-contain "
            src={Logo}
            alt="Product"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Product Title
            </h2>
            <p className="text-gray-600 mb-4">
              This is a simple description of the product. It summarizes the key
              features and benefits.
            </p>
            <a
              href="#"
              className="text-white bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 rounded-md transition-all duration-200 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img
            className="w-full h-48 object-contain "
            src={Logo}
            alt="Product"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Product Title
            </h2>
            <p className="text-gray-600 mb-4">
              This is a simple description of the product. It summarizes the key
              features and benefits.
            </p>
            <a
              href="#"
              className="text-white bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 rounded-md transition-all duration-200 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>

      <h2 className="mx-auto my-2 sm:max-w-full md:max-w-md lg:w-40 border-gray-400  text-center border-b-2 border-t-2 py-2">
        Air purifying plants
      </h2>

      {/* Grid container for the product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6 mx-auto px-4">
        {/* Product Card 4 */}
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/400x200"
            alt="Product"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Product Title
            </h2>
            <p className="text-gray-600 mb-4">
              This is a simple description of the product. It summarizes the key
              features and benefits.
            </p>
            <a
              href="#"
              className="text-white bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 rounded-md transition-all duration-200 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/400x200"
            alt="Product"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Product Title
            </h2>
            <p className="text-gray-600 mb-4">
              This is a simple description of the product. It summarizes the key
              features and benefits.
            </p>
            <a
              href="#"
              className="text-white bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 rounded-md transition-all duration-200 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/400x200"
            alt="Product"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Product Title
            </h2>
            <p className="text-gray-600 mb-4">
              This is a simple description of the product. It summarizes the key
              features and benefits.
            </p>
            <a
              href="#"
              className="text-white bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 rounded-md transition-all duration-200 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
