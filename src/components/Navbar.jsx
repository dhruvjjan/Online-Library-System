// this is a navbar component for an online library system
// it provides navigation links to home, browse books, and add book pages

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold"> Online Library</h1>
      <div className="space-x-4">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/books" className="hover:underline">Browse Books</NavLink>
        <NavLink to="/add" className="hover:underline">Add Book</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
