import { configureStore } from "@reduxjs/toolkit";
import bookReducers from "./bookSlice";
import songReducers from "./songSlice";

const store = configureStore({
  reducer: {
    songs: songReducers,
    books: bookReducers,
  },
});

export default store;
