import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Error from "../components/Error";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";

const Shop = () => {
  const [productData, setProductData] = useState({
    products: [],
    total: 0,
    skip: 0,
    limit: 10,
  });
  const { products, total } = productData;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [page, setPage] = useState(1);
  const [userSearch, setUserSearch] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        setIsLoading(true);
        const limit = 10;
        const skipValue = (page - 1) * limit;
        const params = new URLSearchParams();

        params.set("skip", skipValue);
        params.set("limit", limit);
        if (userSearch) params.set("q", userSearch);
        if (order) params.set("order", order);
        if (sortBy) params.set("sortBy", sortBy);

        let uri = "https://dummyjson.com/products";
        if (category) {
          uri = `https://dummyjson.com/products/category/${category}?${params.toString()}`;
        } else {
          uri = userSearch
            ? `https://dummyjson.com/products/search?${params.toString()}`
            : `https://dummyjson.com/products?${params.toString()}`;
        }

        const res = await fetch(uri);
        const results = await res.json();

        setProductData({
          products: results.products,
          total: results.total,
          skip: skipValue,
          limit,
        });
        setIsError(null);
      } catch (error) {
        setIsError(error.message);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchedProducts();
  }, [page, userSearch, order, sortBy, category]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get("search");
    setUserSearch(searchQuery);
    setPage(1);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <SearchBar handleSearchSubmit={handleSearchSubmit} />

      {/* Filters */}
      <Filters
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
        category={category}
        setCategory={setCategory}
      />

      {/* Loading */}
      {isLoading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Error */}
      {isError && <Error isError={isError} />}

      {/* No Results */}
      {!isLoading && products.length < 1 && (
        <div className="text-center text-gray-500 mb-4 italic">
          No products yet...
        </div>
      )}

      {/* Product Grid */}
      {!isLoading && products.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
          <ProductGrid products={products} isLoading={isLoading} />
          <Pagination
            productData={productData}
            page={page}
            setPage={setPage}
            total={total}
          />
        </>
      )}
    </div>
  );
};

export default Shop;
