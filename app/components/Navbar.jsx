"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      {/* Hamburger Icon */}
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">Welcome</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden block"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`mt-4 md:flex md:items-center md:space-x-6 ${
          menuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <li>
          <Link legacyBehavior href="/">
            <a className="text-white">Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a className="text-white">About</a>
          </Link>
        </li>
        {/* Menu Item with Submenu */}
        <li className="relative">
          <button
            onClick={() => setSubMenuOpen(!subMenuOpen)}
            className="text-white"
          >
            Students ⬇
          </button>
          {/* Submenu */}
          {subMenuOpen && (
            <ul className="absolute left-0 mt-2 bg-gray-700 rounded-md shadow-lg">
              <li>
                <Link legacyBehavior href="/services/web-development">
                  <a className="block px-4 py-2 text-white hover:bg-gray-600">
                    Undergraduate
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services/design">
                  <a className="block px-4 py-2 text-white hover:bg-gray-600">
                  Postgraduate
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
