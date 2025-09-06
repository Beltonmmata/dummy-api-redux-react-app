import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-xl overflow-hidden mb-10">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Discover the Best Deals on Quality Products
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Shop from a wide range of top-rated items. Enjoy affordable prices,
            fast delivery, and exclusive discounts.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            //src="https://images.unsplash.com/photo-1607083200173-ef5f5e10f927?auto=format&fit=crop&w=700&q=80"
            src="https://media.istockphoto.com/id/1157459058/photo/young-woman-with-shopping-bags-riding-trolley.jpg?s=2048x2048&w=is&k=20&c=I_Qffmb2EiJpPwDoPLbLJh2Hx6bhX_5Bn4PxclGJnGw="
            alt="Shopping hero"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
