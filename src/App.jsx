import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {

  const [cart, setCart] = useState([]);
  function addToCart(product) {

    setCart([
        ...cart,
        product
    ]);

}
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
        
        <Route
  path="/product/:id"
  element={<ProductDetails />}
/>
      </Routes>
      <Route
    path="/"
    element={<Home addToCart={addToCart} />}
/>
    </>
  );
}

export default App;