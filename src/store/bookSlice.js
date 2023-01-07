import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        addBook(state, action) {
            return [
                ...state,
                action.payload,
            ]
        },
        removeBook(state, action) {
            const updatedState = [...state];
            updatedState.splice(action.payload, 1);

            return [
                ...updatedState,
            ]
        },
        resetBook() {
            return [];
        },
    }
});

export const { addBook, removeBook, resetBook } = bookSlice.actions;

export default bookSlice.reducer