import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />

                <Route
                    path="/cart"
                    element={<Cart />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/checkout"
                    element={
                        <ProtectedRoute>
                            <Checkout />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/orders"
                    element={
                        <ProtectedRoute>
                            <Orders />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </>

    );

}

export default App;