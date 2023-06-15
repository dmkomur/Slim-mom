import { createSlice } from '@reduxjs/toolkit';
import { postProduct, deleteProduct, dayInfo } from './day-operations';

const initialState = {
  id: null,
  eatenProducts: [],
  date: '',
  daySummary: { },
};

export const daySlice = createSlice({
  name: 'day',
  initialState,
  extraReducers: builder => {
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.eatenProducts =
        action.payload.eatenProducts;
      state.id = action.payload.id ;
      state.date = action.payload.date ;
      state.daySummary = action.payload.daySummary ;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
     
      state.eatenProducts = state.eatenProducts.filter(
        eaten => eaten.id !== action.payload
      );
      
    });
    builder.addCase(dayInfo.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.eatenProducts = action.payload.eatenProducts;
      state.date = action.payload.date;
      state.daySummary = action.payload.daySummary;
    });
  },
});
