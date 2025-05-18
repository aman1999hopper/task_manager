import { createSlice } from "@reduxjs/toolkit";

let user = null;
const userString = localStorage.getItem('user');

try {
  user = userString && userString !== "undefined" ? JSON.parse(userString) : null;
} catch (err) {
  console.error("Error parsing user from localStorage:", err);
  user = null;
}

const initialState = {
   user: user,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem('token')
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      // Store in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      // Clear localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;