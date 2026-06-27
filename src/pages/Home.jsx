import { useEffect, useState } from "react";
import supabase from "../supabase";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function getProducts() {

  console.log("1. Function Started");

  const { data, error } = await supabase
    .from("products")
    .select("*");


  if (error) {
    return;
  }

  setProducts(data);

  
}

    getProducts();

  }, []);

  return (
    <div>
      <h1>Siva Collection</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          name={product.product_name}
          price={product.price}
        />
      ))}
    </div>
  );

}

export default Home;