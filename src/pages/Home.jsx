import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

import useProducts from "../hooks/useProducts";

function Home() {

    const {

        products,

        loading,

        error

    } = useProducts();

    if (loading) {

        return <h2>Loading Products...</h2>;

    }

    if (error) {

        return <h2>{error}</h2>;

    }

    return (

        <>

            <Hero />

            <section className="products-section">

                <h2>

                    Latest Collection

                </h2>

                <div className="products-grid">

                    {

                        products.map((product) => (

                            <ProductCard

                                key={product.id}

                                product={product}

                            />

                        ))

                    }

                </div>

            </section>

        </>

    );

}

export default Home;