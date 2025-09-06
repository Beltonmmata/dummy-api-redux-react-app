import React from "react";
import { Outlet } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div>Checkout page</div>
      <Outlet />
    </>
  );
};

export default Checkout;
