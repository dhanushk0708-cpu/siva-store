import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import CartContext from "../context/CartContext";
import useAuth from "../hooks/useAuth";

function Navbar() {

    const { cart } = useContext(CartContext);

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    async function handleLogout() {

        await logout();

        navigate("/login");

    }

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                borderBottom: "1px solid #ddd"
            }}
        >

            <h2>Siva Collection</h2>

            <div>

                <Link to="/">Home</Link>

                {" | "}

                <Link to="/cart">

                    Cart ({cart.length})

                </Link>

                {

                    user ? (

                        <>

                            {" | "}

                            <Link to="/orders">

                                Orders

                            </Link>

                            {" | "}

                            <button
                                onClick={handleLogout}
                            >

                                Logout

                            </button>

                        </>

                    ) : (

                        <>

                            {" | "}

                            <Link to="/login">

                                Login

                            </Link>

                            {" | "}

                            <Link to="/signup">

                                Signup

                            </Link>

                        </>

                    )

                }

            </div>

        </nav>

    );

}

export default Navbar;