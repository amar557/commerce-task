import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = { items: [], subtotal: 0 };

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemexist = state.items.some(
        (item) => item._id === action.payload._id
      );
      if (itemexist) {
        toast.info("item is already in cart");
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        };
        state.items.push(newItem);
        toast.success("item added to cart");
        cartSlice.caseReducers.subTotal(state);
      }
    },
    increment: (state, action) => {
      const itemexist = state.items.find((item) => item._id === action.payload);
      if (itemexist) {
        itemexist.quantity++;
        itemexist.total = itemexist.quantity * itemexist.price;
        cartSlice.caseReducers.subTotal(state);
      }
    },
    decrement: (state, action) => {
      const itemexist = state.items.find((item) => item._id === action.payload);
      if (itemexist) {
        if (itemexist.quantity === 1) {
          return cartSlice.caseReducers.deleteItem(state, action);
        } else {
          itemexist.quantity--;
          itemexist.total = itemexist.quantity * itemexist.price;
        }
        cartSlice.caseReducers.subTotal(state);
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      cartSlice.caseReducers.subTotal(state);
    },
    subTotal: (state) => {
      state.subtotal = state.items.reduce((acc, item) => acc + item.total, 0);
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: () => {},
});

export const { addToCart, increment, decrement, deleteItem, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
