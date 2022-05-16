import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
    // admin: false,
  },
  reducers: {
    loginStart: (state) => {
      state.user = null;
      state.isFetching = true;
      state.error = false;
      //   state.admin = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state));
      state.isFetching = false;
      state.error = false;
      //   state.admin = action.payload.isAdmin;
    },
    loginFailure: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = true;
      //   state.admin = false;
    },
    logout: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = false;
      //   state.admin = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
