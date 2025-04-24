// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center mr-2">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="text-xl font-bold text-gray-800">NextApp</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition duration-300">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition duration-300">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition duration-300">
            Pricing
          </Link>
          <Link href="/login" className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
            Login
          </Link>
          <Link href="/signup" className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-indigo-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-3 py-3">
            <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition duration-300">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition duration-300">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition duration-300">
              Pricing
            </Link>
            <Link href="/login" className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
              Login
            </Link>
            <Link href="/signup" className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 text-center">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;