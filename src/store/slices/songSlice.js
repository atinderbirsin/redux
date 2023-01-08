import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action/reset";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      return [...state, action.payload];
    },
    removeSong(state, action) {
      const updatedState = [...state];
      updatedState.splice(action.payload, 1);

      return [...updatedState];
    },
    resetSong() {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

export const { addSong, removeSong, resetSong } = songSlice.actions;

export default songSlice.reducer;
