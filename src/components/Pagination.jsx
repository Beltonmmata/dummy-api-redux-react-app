import { useState, useEffect } from "react";

const Pagination = ({ productData, page, setPage, total }) => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={() => {
          setPage((prevPage) => Math.max(1, prevPage - 1));
        }}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Prev
      </button>
      <span className="px-4 py-2 font-medium">Page {page}</span>
      <button
        disabled={page * productData.limit >= total}
        onClick={() => {
          setPage((prevPage) => prevPage + 1);
        }}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
