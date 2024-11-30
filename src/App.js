
import "./css/mystyle.css";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Header/HeroSection/Hero";
import Landing from "./Components/Header/LandingPage/Landing";
import Footer from "./Components/Header/Footer";
import ProductPage from "./Components/ProductPage/ProductPage";
import Carts from "./Components/cartPage/Carts";
import CategoryPage from "./Components/ProductPage/CategoryPage";
import SingleProduct from "./Components/ProductPage/SingleProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="category/singleProduct/:itemID" element={<SingleProduct />} />
      </Routes>
      {<Footer />}
    </>
  );
}

export default App;
