import { createSlice } from "@reduxjs/toolkit";

export const initialState = [];

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        },
        removeItem(state, action) {
           return state.filter(item => item.id !== action.payload)
        },
        increaseItems(state, action) {
            const item = state.find((item) => item.id === action.payload);
            if(item) {
                item.count += 1
            }
        },
        decreaseItems(state, action) {
            const item = state.find((item) => item.id === action.payload);
            if(item) {
                item.count -= 1;
            }
        },
        filterItems(state) {
            state.filter((item) => item.length() > 0)
        } 
    }
})
console.log(initialState);

export default UserSlice.reducer;
export const { addItem, removeItem, increaseItems, decreaseItems, filterItems } = UserSlice.actions;