import React, { useState,useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import context from '../context/context'

const Navbar = () => {
  const [toggle, setToggle] = useState("light");
  const location = useLocation();
  const {feature,dispatch} =useContext(context)

  const list = [
    { name: "Home", link: "/E-commer-practice/" },
    { name: "Products", link: "/product" },
    { name: "Add to Cart", link: "/addtocart" },
  ];

  const isDark = toggle === "dark";

  const changeingtheme = () => {
    setToggle((current) =>
      current === "light" ? "dark" : "light"
    );
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isDark
          ? "border-gray-800 bg-gray-950 text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-lg font-bold text-white shadow-md transition group-hover:bg-amber-700">
            M
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight">
              My<span className="text-amber-600">Store</span>
            </h1>

            <p
              className={`hidden text-[10px] font-medium uppercase tracking-widest sm:block ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Shop Everything
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {list.map((item) => {
            const active = location.pathname === item.link;

            return (
              <Link
                key={item.name}
                to={item.link}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-amber-100 text-amber-700"
                    : isDark
                    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.name}

                {/* Cart Badge */}
                {item.name === "Add to Cart" && (
                  <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-600 px-1.5 text-[10px] font-bold text-white">
                          {feature.length} Items

                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Button */}
          <button
            onClick={changeingtheme}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 ${
              isDark
                ? "border-gray-700 bg-gray-900 hover:bg-gray-800"
                : "border-gray-200 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <span className="text-lg">
              {isDark ? "☀️" : "🌙"}
            </span>
          </button>

          {/* Mobile Menu */}
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-xl border md:hidden ${
              isDark
                ? "border-gray-700 bg-gray-900"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`border-t px-6 py-3 md:hidden ${
          isDark
            ? "border-gray-800 bg-gray-950"
            : "border-gray-100 bg-white"
        }`}
      >
        <div className="flex gap-2 overflow-x-auto">
          {list.map((item) => {
            const active = location.pathname === item.link;

            return (
              <Link
                key={item.name}
                to={item.link}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold ${
                  active
                    ? "bg-amber-600 text-white"
                    : isDark
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;