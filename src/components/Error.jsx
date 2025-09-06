import React from "react";

const Error = (props) => {
  return (
    <div className="text-center text-red-500 font-medium mb-4">
      {props.isError}
    </div>
  );
};

export default Error;
