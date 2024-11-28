import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className=' flex gap-11 my-10' >
        <div className='py-5 flex flex-col gap-3 items-center '>
            <h1 className='font-bold '>Wellcome to Paradise Nursery</h1>
            <h2><i>When Green Meets Serenity</i></h2>
            <Link className='rounded-md bg-green-500 px-7 py-2 hover:bg-green-700 text-center ' to='/ProductPage'>Get Started</Link>

        </div>
        <div className='about_section' >
            <h2 className='font-bold my-2 '><i>Welcome to Paradise Nursery, where green meets serenity!</i> </h2>
            <p>
            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.

Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.

Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
            </p>
        </div>
      
    </section>
  )
}

export default Hero
