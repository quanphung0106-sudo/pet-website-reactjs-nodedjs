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
    saveNewRefreshToken: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.user = {
        ...state.user,
        accessToken: action.payload,
      };
    },
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
    loginFail: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = true;
      //   state.admin = false;
    },
    logout: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = false;
      localStorage.clear();
      //   state.admin = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, saveNewRefreshToken, logout } = userSlice.actions;
export default userSlice.reducer;
