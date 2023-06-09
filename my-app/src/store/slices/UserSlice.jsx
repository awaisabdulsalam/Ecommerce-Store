import { createSlice } from "@reduxjs/toolkit";
import products from "../../products";
export const initialState = [];

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addItem(state, action) {
      const items = state.find((item) => item.id === action.payload.id)
      if(!items) {
        state.push(action.payload);
      }
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseItems(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    decreaseItems(state, action) {
      const item = state.find((item) => item.id === action.payload);
      console.log(Array.isArray(item));
      if (item && item.count > 0) {
        item.count -= 1;
      }
    },
    filterItems(state) {
      state.filter((item) => item.length() > 0);
    },
    buttonFilter(state, action) {
      console.log(action.payload);
      const selectedButton = products.filter((product) => {
        return product.category === action.payload;
      });
      selectedButton.forEach((product) => {
        console.log(product.category);
      });
    },
  },
});

export default UserSlice.reducer;
export const {
  addItem,
  removeItem,
  increaseItems,
  decreaseItems,
  filterItems,
  buttonFilter,
} = UserSlice.actions;
