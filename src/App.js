

import ShoppingCart from "./Components/ShoppingCart";
// import "./bootstrap-5/css/bootstrap.min.css"
import "./css/mystyle.css"

import ProductList from "./Components/ProductList";


import { Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Header/HeroSection/Hero";
import Landing from "./Components/Header/LandingPage/Landing";
import Footer from "./Components/Header/Footer";
import ProductPage from "./Components/ProductPage/ProductPage";
import Carts from "./Components/cartPage/Carts";
function App() { 
 
  return (
   <>  
{/* <Counter/>
<UserList/> */}

    <Routes>

        <Route path="/" element={<Landing/>}   />
        <Route path="/carts" element={<Carts/>}   />
        <Route path="/ProductPage" element={<ProductPage/>}   />
    </Routes>

    { <Footer/>}



    </>
  );
}

export default App;
