//this file contains the main application component which sets up the routing and renders the components

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BrowseBooks from "./components/BrowseBooks";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";
import BooksByCategory from "./components/BooksByCategory";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BooksByCategory/>} />
        <Route path="/books/details/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

