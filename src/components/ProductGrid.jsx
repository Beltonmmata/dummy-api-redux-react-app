import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, isLoading }) => {
  return (
    <>
      {products.length > 0 && !isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* products Cards */}
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductGrid;
