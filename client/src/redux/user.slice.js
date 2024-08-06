import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = { items: [], subtotal: 0 };

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const { _ } = userSlice.actions;
export default userSlice.reducer;
