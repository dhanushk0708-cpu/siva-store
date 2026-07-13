import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

function Home() {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <h2>Loading Products...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h1>Siva Collection</h1>

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default Home;