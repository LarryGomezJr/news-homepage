import React, { useState } from "react";
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/logo.svg" width={50} height={50} alt="logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <a
                href="#"
                className=" px-3 py-2 rounded-md text-sm font-medium text-slate-950 hover:text-gray-500  "
              >
                Home
              </a>
              <a
                href="#"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-slate-950 hover:text-gray-500"
              >
                New
              </a>
              <a
                href="#"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-slate-950 hover:text-gray-500"
              >
                Popular
              </a>
              <a
                href="#"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-slate-950 hover:text-gray-500"
              >
                Trending
              </a>
              <a
                href="#"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-slate-950 hover:text-gray-500"
              >
                Categories
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-slate-950  focus:outline-none  focus:text-slate-950"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-950 hover:text-gray-500"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-950 hover:text-gray-500"
          >
            New
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-950 hover:text-gray-500"
          >
            Popular
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-950 hover:text-gray-500"
          >
            Trending
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-950 hover:text-gray-500"
          >
            Categories
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
