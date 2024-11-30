import React, { useState } from "react";
import ProductHeader from "./ProductHeader";
import { products } from "./Productdb";
import { addtoCart } from "../Redux/MyCartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  const handleAddtoCart = (item) => {
    dispatch(addtoCart(item));
    setDisabledButtons((prevState) => ({
      ...prevState,
      [item.id]: true, // Disable the button for the current product
    }));
  };
  const [disabledButtons, setDisabledButtons] = useState({}); // Track disabled state per product

  return (
    <>
      <ProductHeader />
      <div className="mx-auto max-w-full  text-center  py-5 border-b-4">
        <h1 className="text-2xl font-bold my-3">Filter Products</h1>
        <label htmlFor="category" className="font-semibold mr-2">
          Select Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-3 py-2 text-center"
        >
          <option value="">All</option>
          {uniqueCategories.map((category, index) => (
            <option className="text-center" key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="Category_Container">
        {filteredProducts?.length === 0 ? (
          <p className="text-center text-gray-500">
            No products available in this category
          </p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              style={{ width: "300px" }}
              className=" bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            >
              {" "}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {item.category}
              </h2>
              <Link to={`/category/singleProduct/${item.id}`}>
                <img
                  className="w-full h-48 object-contain rounded-md transition-transform duration-300 ease-out t hover:scale-110 hover:translate-z-20 hover:rotate-1"
                  src={item.imageUrl}
                  alt={`Image of ${item.name}`}
                />
              </Link>
              <div className="p-6 flex items-center flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h2>

                <button
                  disabled={disabledButtons[item.id]}
                  onClick={() => handleAddtoCart(item)}
                  className={`font-semibold px-6 py-3 rounded-md transition-all duration-200 ease-in-out
                     ${disabledButtons[item.id]? "text-black bg-gray-400 cursor-not-allowed"
                      : "text-white bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {disabledButtons[item.id]
                    ? "Item added to cart"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default CategoryPage;
