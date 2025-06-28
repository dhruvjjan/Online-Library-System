// this file contains the AddBook component which allows users to add a new book to the library

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const err = {};
    Object.entries(formData).forEach(([key, val]) => {
      if (!val.trim()) err[key] = `${key} is required`;
    });
    if (formData.rating && (formData.rating < 1 || formData.rating > 5)) {
      err.rating = "Rating must be between 1 and 5";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(addBook(formData));
    navigate("/books");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {["title", "author", "category", "description", "rating"].map((field) => (
          <div key={field}>
            <label className="block font-medium capitalize">{field}</label>
            <input
              type={field === "rating" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              className="w-full border p-2 rounded"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
