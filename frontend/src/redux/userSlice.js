// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    role: '',
    avatar: '' // sample avatar
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, email, id } = action.payload;
      state.name = name;
      state.email = email;
      state.id = id;
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
