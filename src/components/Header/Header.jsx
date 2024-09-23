import React from "react";
import LogoutBtn from "./LogoutBtn";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Logo";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "portfolio",
      slug: "/",
      active: true,
    },

    {
      name: "your orders",
      slug: "/orders",
      active: authStatus,
    },
  ];

  return (
    <nav className="flex items-center justify-between bg-purple-50 p-4">
      <div className="flex items-center">
       <Logo className="w-8 h-8" onClick={() => navigate('/')} />
      
      </div>
      <div className="flex items-center space-x-6">
        <ul className="list-none flex space-x-10">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <Link
                  to={item.slug}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </div>
      <div>
        {!authStatus ? (
          <Link
            to="/login"
            className="bg-custom-blue text-white px-4 py-2 rounded-md hover:bg-purple-100 transition duration-300"
          >
            Log in →
          </Link>
        ) : (
          <LogoutBtn />
        )}
      </div>
    </nav>
  );
};

export default Header;

