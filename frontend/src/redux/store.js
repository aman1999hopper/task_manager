import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import themeReducer from "../features/Theme/Theme.js"
import authReducer from "./authReducer.js"
import userReducer from "./userSlice.js"

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer,
    auth: authReducer, 
    user: userReducer,
  },
});

export default store;
