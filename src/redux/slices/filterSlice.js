import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    selectedCategoryRedux: 0,
    selectedSortRedux: 0,
    searchRedux:''
  },
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategoryRedux = action.payload;
    },
    changeSort: (state, action) => {
      state.selectedSortRedux = action.payload;
    },
    changeSearch:(state,action) => {
        state.searchRedux = action.payload;
    },
    setFilters:(state,action) => {
      state.selectedCategoryRedux = Number(action.payload.selectedCategoryRedux);
      state.selectedSortRedux = Number(action.payload.selectedSortRedux);
    }
  },
});

export const { changeCategory, changeSort,changeSearch,setFilters } = filterSlice.actions;
export default filterSlice.reducer;
