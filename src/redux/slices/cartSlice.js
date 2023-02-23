import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
        findItem.price += action.payload.price
      } else {
        
        state.items.push({
          ...action.payload,
          count: 1,
        });
       
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);
    },
    removeItem: (state, action) => {
      let deleted = state.items.find((obj) => obj.id === action.payload)
      state.totalPrice -= deleted.price
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      
    },
    clearItem: (state) => {
      state.items = [];
      state.totalPrice = 0
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
