import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Site Logo/Name Area */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-extrabold text-indigo-600 tracking-tight transition duration-150 hover:text-indigo-800"
            >
              My App
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a
              href="/home"
              className="text-gray-600 font-medium hover:text-indigo-600 transition duration-150 p-2 rounded-lg"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-600 font-medium hover:text-indigo-600 transition duration-150 p-2 rounded-lg"
            >
              About
            </a>
            {/* You can add more links here, like /contact or /services */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
