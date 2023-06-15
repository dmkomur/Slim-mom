import { createSlice } from '@reduxjs/toolkit';

// const initialState = 'light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light' },
  reducers: {
    changeTheme: (state, { payload }) => {
      state = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
