import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Error from "../components/Error";
import Hero from "../components/Hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const limit = 16; // Fetch 16 for 8 featured + 8 suggested
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}`
        );
        const results = await res.json();
        setProducts(results.products || []);
        setIsError(null);
      } catch (error) {
        console.error(error.message);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const featured = products.slice(0, 8);
  const suggested = products.slice(8, 16);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Hero />
      {isLoading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}

      {isError && <Error isError={isError} />}

      {!isLoading && products.length === 0 && (
        <div className="text-center text-gray-500 mb-4 italic">
          No products available...
        </div>
      )}

      {!isLoading && products.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <ProductGrid products={featured} />

          <h2 className="text-2xl font-bold mb-6 mt-10">Suggested Products</h2>
          <ProductGrid products={suggested} />
        </>
      )}

      <button
        className="flex bg-blue-800 rounded-md py-3 px-6 mx-auto my-5 text-2xl font-medium cursor-pointer"
        onClick={() => navigate("/shop")}
      >
        Explore More
      </button>
    </div>
  );
};

export default Home;
