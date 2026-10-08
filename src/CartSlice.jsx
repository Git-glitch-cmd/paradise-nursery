import { createSlice } from "@reduxjs/toolkit";

// cart ki starting state
const initialState = {
  items: [], // har item: { id, name, price, image, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // item cart mein add karo
    addItem: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1; // pehle se hai to quantity barhao
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // naya item add karo
      }
    },
    // item cart se hatao
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // quantity update karo (plus/minus buttons ke liye)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id); // zero ho to hata do
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
