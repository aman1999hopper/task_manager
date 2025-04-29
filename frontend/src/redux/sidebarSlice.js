import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
  openDropdown: null,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      // If action.payload is provided, use it; otherwise toggle the current state
      state.isSidebarOpen = action.payload !== undefined ? action.payload : !state.isSidebarOpen;
    },
    toggleDropdown(state, action) {
      state.openDropdown = state.openDropdown === action.payload ? null : action.payload;
    },
  },
});

export const { toggleSidebar, toggleDropdown } = sidebarSlice.actions;
export default sidebarSlice.reducer;
