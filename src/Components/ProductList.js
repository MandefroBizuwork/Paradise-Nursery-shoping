import React, { useState } from "react";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./CartSlice";

const ProductList = () => {
  const dispatch = useDispatch(); // Call useDispatch at the top level of the component
  const [disabledButtons, setDisabledButtons] = useState({}); // Track disabled state per product

  const products = [
    { id: 1, name: "Product A", price: 60 },
    { id: 2, name: "Product B", price: 75 },
    { id: 3, name: "Product C", price: 30 },
  ];

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item)); // Dispatch the action to add the item to the cart
    setDisabledButtons((prevState) => ({
      ...prevState,
      [item.id]: true, // Disable the button for the current product
    }));
  };

  return (
    <div className="container-fluid shadow py-4">
      <h2 className="product-list-title text-center">Products</h2>
      <ul className="product-list-items list-unstyled">
        {products.map((product) => (
          <li
            key={product.id}
            className="d-flex gap-5 my-4  align-items-center"
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <button   disabled={disabledButtons[product.id]}
              onClick={() => handleAddToCart(product)} // Pass the function as a callback
              className="btn btn-success"
            >
             {disabledButtons[product.id] ?"the item added to cart":"Add to cart"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
