import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import CheckoutShipping from "./components/CheckoutShipping";
import CheckoutPlaceorder from "./components/CheckoutPlaceorder";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/profile"
          element={
            <Profile
              name="African Real Estate"
              profileImage="https://example.com/image.jpg"
              location="Nairobi"
              rating={4.8}
              reviewsCount={24}
              propertiesCount={379}
              viewsCount={829}
              likesCount={100}
              since="December 2024"
              agencyType="Store"
            />
          }
        />
        <Route path="/checkout" element={<Checkout />}>
          <Route path="shipping" element={<CheckoutShipping />} />
          <Route path="placeorder" element={<CheckoutPlaceorder />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
