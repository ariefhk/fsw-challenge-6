import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearch: false,
};

export const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    searchMode: (state, action) => {
      state.isSearch = action.payload; // true || false
    },
  },
});

export const getIsSearch = (state) => state.themes.isSearch;

export default themeSlice.reducer;
