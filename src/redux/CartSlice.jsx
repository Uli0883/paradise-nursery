import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    removeItem(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        const difference = quantity - item.quantity;
        item.quantity = quantity;
        state.totalQuantity += difference;
        state.totalAmount += difference * item.price;
        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      } else if (item && item.quantity === 1) {
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { 
  addItem, 
  removeItem, 
  updateQuantity, 
  increaseQuantity, 
  decreaseQuantity 
} = cartSlice.actions;

export default cartSlice.reducer;
