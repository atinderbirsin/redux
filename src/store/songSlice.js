import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {

        },
        removeSong(state, action) {

        },
        resetSong(state, action) {

        }
    }
});

export const { addSong, removeSong, resetSong } = songSlice.actions;

export default songSlice.reducer 