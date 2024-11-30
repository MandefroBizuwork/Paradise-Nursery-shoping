import React, { useEffect, useState } from "react";
import ProductHeader from "./ProductHeader";
import { useDispatch } from "react-redux";
import { products } from "./Productdb";
import { addtoCart } from "../Redux/MyCartSlice";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { itemID } = useParams();
  const [producDetail, setProducDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Ensure consistent type comparison (string vs number)
    const filteredProduct = products.filter(
      (item) => item.id === Number(itemID)
    );
    setProducDetail(filteredProduct);
  }, [itemID]);

  const handleAddtoCart = (item) => {
    dispatch(addtoCart(item));
  };

  return (
    <>
      <ProductHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6 mx-auto px-4">
        {producDetail.length === 0 ? (
          <p className="text-center text-gray-500">No products available</p>
        ) : (
          producDetail.map((item) => (
            <div
              key={item.id}
              className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            >
              <img
                className="w-full h-48 object-contain rounded-md transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-z-5 hover:rotate-1"
                src={item.imageUrl}
                alt={`Image of ${item.name}`}
              />

              <div className="p-6 flex items-center flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  ${item.price.toFixed(2)}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => handleAddtoCart(item)}
                  className="text-white bg-green-600 hover:bg-green-700 font-semibold px-6 py-3 rounded-md transition-all duration-200 ease-in-out"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default SingleProduct;
