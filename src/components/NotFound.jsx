// this file contains the NotFound component which displays a 404 error page
// and provides a link to navigate back to the home page

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-8">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h2>
      <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
