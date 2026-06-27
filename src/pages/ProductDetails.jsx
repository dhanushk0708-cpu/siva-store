import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../supabase";

function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProduct() {

            const { data, error } = await supabase
                .from("products")
                .select("*")
                .eq("id", id)
                .single();

            console.log("DATA :", data);
            console.log("ERROR :", error);

            setProduct(data);
        }

        getProduct();

    }, []);

    if (product === null) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>{product.product_name}</h1>

            <h2>₹{product.price}</h2>

            <p>Stock : {product.stock}</p>
        </div>
    );
}

export default ProductDetails;