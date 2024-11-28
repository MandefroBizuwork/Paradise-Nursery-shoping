import React from 'react';
import Logo from "../../images/logo.jpg";
import Cart from "../../images/cart.svg";
import { Link } from 'react-router-dom';

function ProductHeader() {
  return (
    <div className='container bg-green-500 relative flex flex-wrap items-center justify-between p-4'>
      {/* Left Section: Logo and Text */}
      <div className='flex items-center gap-6 w-full md:w-auto text-white text-center md:text-left'>
        <img src={Logo} alt="Logo" className='rounded-full h-16' />
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-xl'>Paradise Nursery</h1>
          <h2><i>Welcome to plants</i></h2>
        </div>
      </div>

      {/* Center Section: Title */}
      <div className='text-white p-4 text-center w-full md:w-auto'>
        <h1 className='text-2xl font-semibold'>Plants</h1>
      </div>

      {/* Right Section: Cart */}
      <div className='text-white p-4 text-center w-full md:w-auto relative'>
        <Link to='/Carts' className='cursor-pointer  hover:text-gray-300'><img className='h-10 ' src={Cart}/><span className=' text-center absolute left-9 top-1 bg-red-400 rounded-full pl-2 pr-2 '>0</span> </Link>
        
      </div>
    </div>
  );
}

export default ProductHeader;
