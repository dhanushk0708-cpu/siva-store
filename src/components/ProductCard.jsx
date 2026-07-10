import { Link } from "react-router-dom";
import { useContext } from "react";

import CartContext from "../context/CartContext";

function ProductCard({ product }) {

    const { addToCart } = useContext(CartContext);

    return (

        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "15px"
            }}
        >

            <Link to={`/product/${product.id}`}>

                <h3>{product.name}</h3>

            </Link>

            <p>

                ₹ {product.price}

            </p>

            <button
                onClick={() => addToCart(product)}
            >

                Add To Cart

            </button>

        </div>

    );

}

export default ProductCard;