const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse border-gray-900 p-4 rounded-md shadow-md">
      <div className="h-40 w-full bg-gray-300 rounded mb-3 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
      <div className="h-3 bg-gray-300 rounded w-1/4 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
    </div>
  );
};

export default ProductCardSkeleton;
