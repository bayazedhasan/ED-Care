import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedItem: 0,
  totalPrice: 0,
  tex: 0,
  texRate: 0.05,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExsist = state.products.find((product) => product.id === action.payload.id);

      if (!isExsist) {
        alert("Product added to the cart successfully!");
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        alert("Product is already in the cart!");
      }

      // Update totals
      state.selectedItem = state.products.reduce((sum, p) => sum + p.quantity, 0);
      state.totalPrice = state.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
      state.tex = state.totalPrice * state.texRate;
      state.grandTotal = state.totalPrice + state.tex;
    },

    increaseQty: (state, action) => {
      const item = state.products.find(p => p.id === action.payload);
      if (item) item.quantity += 1;

      // Update totals
      state.selectedItem = state.products.reduce((sum, p) => sum + p.quantity, 0);
      state.totalPrice = state.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
      state.tex = state.totalPrice * state.texRate;
      state.grandTotal = state.totalPrice + state.tex;
    },

    decreaseQty: (state, action) => {
      const item = state.products.find(p => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;

      // Update totals
      state.selectedItem = state.products.reduce((sum, p) => sum + p.quantity, 0);
      state.totalPrice = state.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
      state.tex = state.totalPrice * state.texRate;
      state.grandTotal = state.totalPrice + state.tex;
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);

      // Update totals
      state.selectedItem = state.products.reduce((sum, p) => sum + p.quantity, 0);
      state.totalPrice = state.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
      state.tex = state.totalPrice * state.texRate;
      state.grandTotal = state.totalPrice + state.tex;
    },

    clearCart: (state) => {
      state.products = [];
      state.selectedItem = 0;
      state.totalPrice = 0;
      state.tex = 0;
      state.grandTotal = 0;
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.products;
export const selectCartTotals = (state) => ({
  subtotal: state.cart.totalPrice,
  tax: state.cart.tex,
  grandTotal: state.cart.grandTotal,
  selectedItem: state.cart.selectedItem
});

export default cartSlice.reducer;
