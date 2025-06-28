
import { useParams, Link } from "react-router-dom";
import books from "../data/Books";

const BooksByCategory = () => {
  const { category } = useParams();
  const filtered = books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Category: {category}</h2>

      {filtered.length > 0 ? (
        <ul className="space-y-4">
          {filtered.map((book) => (
            <li key={book.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{book.title}</h3>
              <p className="text-sm">by {book.author}</p>
              <Link to={`/books/details/${book.id}`} className="text-blue-600 underline mt-2 inline-block">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found in this category.</p>
      )}
    </div>
  );
};

export default BooksByCategory;
