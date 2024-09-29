// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-[#18181B] p-4 font-montserrat">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Links */}
        <div className="flex items-center space-x-4">
          <a href="/equipe" className="text-white hover:underline">
            Equipe
          </a>
          <a href="/estatisticas" className="text-white hover:underline">
            Estatísticas
          </a>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 mx-4">
          <a href="/">
            <img src={logo} alt="Logo" className="h-8" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a href="/login" className="text-white hover:underline">
            Login
          </a>
          <a href="/register" className="text-white hover:underline">
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
