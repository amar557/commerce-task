import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export const link = "http://localhost:3000";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const products = await fetch(`${link}/api/list/get/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const items = await products.json();
      setProducts(items);
    }
    getProducts();
  }, []);

  return (
    <div className="flex w-11/12 mx-auto items-start justify-start gap-4 flex-wrap my-10">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}

export default Home;
