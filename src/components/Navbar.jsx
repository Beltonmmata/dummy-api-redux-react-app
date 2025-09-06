import { CircleUserRound, ShoppingCart, UserIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const userName = "Belton"; // Replace this with real user context if available

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="text-2xl font-bold text-blue-800">
          Dummby
        </NavLink>

        {/* Right-side Links */}
        <div className="flex items-center gap-6">
          {/* Profile Text Link */}
          <NavLink to="/profile" className="flex gap-1">
            <CircleUserRound size={32} />
            <div className="ml-1 flex flex-col">
              <span className="text-xs">Hi, {userName}</span>
              <span className="text-xs">Account</span>
            </div>
          </NavLink>

          {/* Cart Icon */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-1 transition hover:text-blue-700 ${
                isActive ? "text-blue-700 font-semibold" : "text-gray-800"
              }`
            }
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="hidden sm:inline">Cart</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
