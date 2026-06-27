import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
const { addToCart } = useContext(CartContext);

function ProductCard(props)
{
  return (

    <div
      style={{
        border:"1px solid black",
        padding:"10px",
        marginBottom:"10px"
      }}
    >

      <Link
    to={`/product/${props.product.id}`}
>
    <h3>
        {props.name}
    </h3>
</Link>
      <p>
        ₹{props.price}
      </p>

      <button
  onClick={() =>
    addToCart(props.product)
  }
>
  Add To Cart
</button>

    </div>

  );
}

export default ProductCard;