import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        addBook(state, action) {

        },
        removeBook(state, action) {

        },
        resetBook(state, action) {

        },
    }
});

export const { addBook, removeBook, resetBook } = bookSlice.actions;

export default bookSlice.reducer