// redux/booksSlice.js
import { createSlice } from "@reduxjs/toolkit";
import books from "../data/Books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: books,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
