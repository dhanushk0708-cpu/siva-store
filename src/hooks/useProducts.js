import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message || "Failed to load products.");
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return {
        products,
        loading,
        error,
    };
}

export default useProducts;