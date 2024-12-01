import React from "react";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-artistic-bg text-white">
    <h1 className="text-2xl font-bold">ArtLens</h1>
    <ul className="flex space-x-4">
      <li className="hover:text-highlight transition">Home</li>
      <li className="hover:text-highlight transition">Portfolio</li>
      <li className="hover:text-highlight transition">About</li>
    </ul>
  </nav>
);

export default Navbar;
