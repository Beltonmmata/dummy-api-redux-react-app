import React from "react";

const Filters = ({
  sortBy,
  setSortBy,
  order,
  setOrder,
  category,
  setCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home Decoration</option>
        <option value="furniture">Furniture</option>
        <option value="tops">Tops</option>
        <option value="womens-dresses">Women's Dresses</option>
        <option value="womens-shoes">Women's Shoes</option>
        <option value="mens-shirts">Men's Shirts</option>
        <option value="mens-shoes">Men's Shoes</option>
        <option value="mens-watches">Men's Watches</option>
        <option value="womens-watches">Women's Watches</option>
        <option value="womens-bags">Women's Bags</option>
        <option value="womens-jewellery">Women's Jewellery</option>
        <option value="sunglasses">Sunglasses</option>
        <option value="automotive">Automotive</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="lighting">Lighting</option>
      </select>

      {/* Sort Filter */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
      >
        <option value="title">Sort by: Title</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="stock">Stock</option>
        <option value="discountPercentage">Discount %</option>
      </select>

      {/* Order */}
      <select
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Filters;
