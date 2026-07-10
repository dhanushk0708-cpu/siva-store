import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../context/CartContext";

function Cart() {

    const {

        cart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        totalItems,

        totalPrice

    } = useContext(CartContext);

    if (cart.length === 0) {

        return (

            <div>

                <h2>Cart is Empty</h2>

                <Link to="/">

                    Continue Shopping

                </Link>

            </div>

        );

    }

    return (

        <div>

            <h2>Shopping Cart</h2>

            {

                cart.map((item) => (

                    <div
                        key={item.id}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "15px"
                        }}
                    >

                        <h3>{item.name}</h3>

                        <p>

                            ₹ {item.price}

                        </p>

                        <p>

                            Quantity : {item.quantity}

                        </p>

                        <button

                            onClick={() =>
                                decreaseQuantity(item.id)
                            }

                        >

                            -

                        </button>

                        {" "}

                        <button

                            onClick={() =>
                                increaseQuantity(item.id)
                            }

                        >

                            +

                        </button>

                        {" "}

                        <button

                            onClick={() =>
                                removeFromCart(item.id)
                            }

                        >

                            Remove

                        </button>

                    </div>

                ))

            }

            <hr />

            <h3>

                Total Items : {totalItems}

            </h3>

            <h3>

                Total Price : ₹ {totalPrice}

            </h3>

            <Link to="/checkout">

                <button>

                    Checkout

                </button>

            </Link>

        </div>

    );

}

export default Cart;