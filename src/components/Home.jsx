// components/Home.jsx
import { Link } from "react-router-dom";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];
const popularBooks = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari" },
];

const Home = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-700 mb-3"> Welcome to the Online Library</h2>
        <p className="text-gray-600 text-lg">Explore categories, find your next favorite book, and enjoy reading!</p>
      </div>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4"> Book Categories</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <li
              key={cat}
              className="bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-center font-medium shadow hover:bg-blue-200 cursor-pointer"
            >
              {cat}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4"> Popular Books</h3>
        <ul className="grid md:grid-cols-3 gap-6">
          {popularBooks.map((book) => (
            <li
              key={book.id}
              className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-1">{book.title}</h4>
              <p className="text-gray-600 mb-3">by {book.author}</p>
              <Link
                to={`/books/details/${book.id}`}
                className="text-blue-600 font-medium underline hover:text-blue-800"
              >
                View Details →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
