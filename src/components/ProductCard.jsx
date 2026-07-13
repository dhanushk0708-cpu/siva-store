import { Link } from "react-router-dom";
import { useContext } from "react";

import CartContext from "../context/CartContext";

function ProductCard({ product }) {

    const { addToCart } = useContext(CartContext);

    // Find the main image
    const mainImage = product.product_images?.find(
        (img) => img.image_type === "main"
    );

    return (

        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "280px",
                margin: "15px"
            }}
        >

            <Link to={`/product/${product.id}`}>

                <img
                    src={
                        mainImage
                            ? mainImage.image_url
                            : "https://via.placeholder.com/250x300?text=No+Image"
                    }
                    alt={product.product_name}
                    style={{
                        width: "100%",
                        height: "320px",
                        objectFit: "cover",
                        borderRadius: "8px"
                    }}
                />

                <h3>

                    {product.product_name}

                </h3>

            </Link>

            <p>

                <strong>

                    Category :

                </strong>

                {

                    product.categories?.category_name

                }

            </p>

            <p>

                ₹ {product.price}

            </p>

            <p>

                Stock :

                {

                    product.stock

                }

            </p>

            <p>

                Status :

                {

                    product.status

                }

            </p>

            <button
                onClick={() =>
                    addToCart(product)
                }
            >

                Add To Cart

            </button>

        </div>

    );

}

export default ProductCard;