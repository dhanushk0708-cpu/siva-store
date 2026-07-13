import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";

import AuthContext from "../../context/AuthContext";
import CartContext from "../../context/CartContext";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const { totalItems } = useContext(CartContext);

    async function handleLogout() {
        await logout();
    }

    return (
        <header className="navbar">

            <div className="navbar__container">

                {/* Logo */}

                <Link to="/" className="navbar__logo">
                    SIVA COLLECTION
                </Link>

                {/* Navigation */}

                <nav className="navbar__links">

                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/">
                        Collections
                    </NavLink>

                    <NavLink to="/">
                        About
                    </NavLink>

                    <NavLink to="/">
                        Contact
                    </NavLink>

                </nav>

                {/* Right Side */}

                <div className="navbar__actions">

                    <Link
                        to="/cart"
                        className="cart-btn"
                    >
                        <FaShoppingBag />

                        <span>{totalItems}</span>

                    </Link>

                    {user ? (

                        <>
                            <Link
                                to="/orders"
                                className="profile-btn"
                            >
                                <FaUserCircle />
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="logout-btn"
                            >
                                Logout
                            </button>
                        </>

                    ) : (

                        <Link
                            to="/login"
                            className="login-btn"
                        >
                            Login
                        </Link>

                    )}

                </div>

            </div>

        </header>
    );
}

export default Navbar;