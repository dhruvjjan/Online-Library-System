
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.list);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">📚 Browse Books</h2>

      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-600">No books found matching your search.</p>
      ) : (
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <li
              key={book.id}
              className="border border-gray-200 p-5 rounded-lg shadow hover:shadow-lg transition duration-300 bg-white"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h3>
              <p className="text-gray-600 mb-1">by <span className="italic">{book.author}</span></p>
              <p className="text-sm text-gray-500 mb-3">Category: {book.category}</p>
              <Link
                to={`/books/details/${book.id}`}
                className="inline-block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrowseBooks;
// This component allows users to browse through the list of books in the library.
// It includes a search functionality to filter books by title or author.