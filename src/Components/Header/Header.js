import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItem = useSelector((state) => state.myCart.cartItems);
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav class="shadow-md  header">
      <div class=" mx-auto px-4 flex items-center justify-between py-4">
        <a href="#" class="text-lg font-bold text-yellow-50 ">
          Paradise Nursery
        </a>
        <button
          class="block md:hidden text-gray-800 focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            style={{ color: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          class="hidden md:flex md:items-center md:space-x-6  navbar-collapse"
          id="navbarNav"
        >
          <ul class="flex space-x-4 ">
            <li class="rounded-md">
              <Link
                to="/"
                class="text-white hover:text-orange-200 font-medium rounded-md transition-all"
              >
                Home
              </Link>
            </li>

            <li class="rounded-md">
              <Link
                to="/about"
                class="text-white hover:text-orange-200 font-medium rounded-md transition-all"
              >
                About
              </Link>
            </li>
            {/* Uncomment this block for a cart icon with badge */}
            {/* <li class="relative">
            <Link
              to="/cart"
              class="text-gray-700 hover:text-gray-900 font-medium flex items-center"
            >
              <i class="bi bi-cart text-xl"></i>
              <span
                class="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-0.5"
              >
                {totalItems}
              </span>
            </Link>
          </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
