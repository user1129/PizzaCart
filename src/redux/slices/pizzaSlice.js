import { createSlice } from "@reduxjs/toolkit";
const pizzaSlice = createSlice({
    name:'pizzas',
    initialState:{
        pizzas:[]
    },
    reducers:{
        setPizza:(state, action) => {
            state.pizzas = action.payload;
        }
    }
})
export const {setPizza} = pizzaSlice.actions;
export default pizzaSlice.reducer;