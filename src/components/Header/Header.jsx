import React, { useState } from "react";
import LogoutBtn from "./LogoutBtn";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Portfolio",
      slug: "/",
      active: true,
    },
    {
      name: "Your Orders",
      slug: "/orders",
      active: authStatus,
    },
  ];

  return (
    <nav className="bg-purple-50 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo className="w-6 h-6 cursor-pointer" onClick={() => navigate('/')} />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="list-none flex space-x-6">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="text-sm text-gray-700 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          <div>
            {!authStatus ? (
              <Link
                to="/login"
                className="bg-custom-blue text-white text-sm px-3 py-1.5 rounded-md hover:bg-purple-100 transition duration-300"
              >
                Log in →
              </Link>
            ) : (
              <LogoutBtn />
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.slug}
                    className="block text-sm text-gray-700 hover:text-gray-900 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          <div className="mt-2">
            {!authStatus ? (
              <Link
                to="/login"
                className="block bg-custom-blue text-white text-sm px-3 py-1.5 rounded-md hover:bg-purple-100 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in →
              </Link>
            ) : (
              <LogoutBtn />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;