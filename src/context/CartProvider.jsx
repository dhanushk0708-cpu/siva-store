import { useState } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(product) {

        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {

            setCart(

                cart.map((item) =>

                    item.id === product.id

                        ? {

                              ...item,

                              quantity: item.quantity + 1

                          }

                        : item

                )

            );

        } else {

            setCart([

                ...cart,

                {

                    ...product,

                    quantity: 1

                }

            ]);

        }

    }

    function increaseQuantity(id) {

        setCart(

            cart.map((item) =>

                item.id === id

                    ? {

                          ...item,

                          quantity: item.quantity + 1

                      }

                    : item

            )

        );

    }

    function decreaseQuantity(id) {

        setCart(

            cart
                .map((item) =>

                    item.id === id

                        ? {

                              ...item,

                              quantity: item.quantity - 1

                          }

                        : item

                )
                .filter((item) => item.quantity > 0)

        );

    }

    function removeFromCart(id) {

        setCart(

            cart.filter(

                (item) => item.id !== id

            )

        );

    }

    const totalItems = cart.reduce(

        (total, item) =>

            total + item.quantity,

        0

    );

    const totalPrice = cart.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0

    );

    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                removeFromCart,

                increaseQuantity,

                decreaseQuantity,

                totalItems,

                totalPrice

            }}

        >

            {children}

        </CartContext.Provider>

    );

}

export default CartProvider;