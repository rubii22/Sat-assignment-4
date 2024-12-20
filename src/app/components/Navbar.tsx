import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white relative h-20">
      <div className="flex justify-between items-center px-4 md:px-6 h-full">
        {/* Logo */}
        <div className="absolute -bottom-10 left-10 md:left-20 z-10">
          <img
            src="logo.Gs.png" // Replace with your logo path
            alt="Logo"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="hidden md:block mx-auto ml-32 text-blue-200 md:text-2xl font-semibold tracking-wide text-center">
          Tuition Free Education Program on Latest Technologies
        </h1>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        
<ul className="hidden md:flex ml-72 space-x-4 md:space-x-4 font-semibold text-1xl">
  <li className="hover:text-gray-300 cursor-pointer">Home</li>
  <li className="hover:text-gray-300 cursor-pointer">Apply</li>
  <li className="hover:text-gray-300 cursor-pointer">Jobs</li>
  <li className="hover:text-gray-300 cursor-pointer">Result</li>
  <li className="hover:text-gray-300 cursor-pointer">Courses</li>
</ul>

      </div>
    </nav>
  );
};

export default Navbar;