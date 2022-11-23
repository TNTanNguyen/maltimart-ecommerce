import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.price += newItem.price;
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.price) * Number(existingItem.quantity);
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addItems } = actions;
export default reducer;
