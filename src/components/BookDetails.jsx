// this file contains the BookDetails component which displays details of a specific book

import { useParams, Link } from "react-router-dom";
import books from "../data/Books";

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-600">Book not found!</h2>
        <Link to="/books" className="text-blue-600 underline mt-2 block">Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto border shadow rounded">
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-md text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
      <p className="text-md text-gray-700 mb-1"><strong>Category:</strong> {book.category}</p>
      <p className="text-md text-gray-700 mb-1"><strong>Description:</strong> {book.description}</p>
      <p className="text-md text-gray-700 mb-4"><strong>Rating:</strong> ⭐ {book.rating}</p>

      <Link
        to="/books"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;
