import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className=" border-gray-900 p-4 rounded-md shadow-md hover:shadow-xl transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded mb-3"
      />
      <h3 className="font-semibold line-clamp-1">{product.title}</h3>
      <p className="text-sm text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
