import { configureStore } from "@reduxjs/toolkit";
import bookReducers from "./slices/bookSlice";
import songReducers from "./slices/songSlice";
import { addSong, removeSong, resetSong } from "./slices/songSlice";
import { addBook, removeBook, resetBook } from "./slices/bookSlice";
import { reset } from "./action/reset";

const store = configureStore({
  reducer: {
    songs: songReducers,
    books: bookReducers,
  },
});

export { addSong, removeSong, resetSong, addBook, removeBook, resetBook, reset };

export default store;
