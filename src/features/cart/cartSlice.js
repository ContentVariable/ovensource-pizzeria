import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    addIngredient: {
      prepare(id, target) {
        return {
          payload: { id, target },
        };
      },
      reducer(state, action) {
        const item = state.cart.find(
          (item) => item.pizzaId === action.payload.id
        );
        if (item.addingredients?.length === 0) item.addIngredients = [];
        item.addIngredients.push(action.payload.target);
      },
    },
    removeIngredient: {
      prepare(id, target) {
        return {
          payload: { id, target },
        };
      },
      reducer(state, action) {
        const item = state.cart.find(
          (item) => item.pizzaId === action.payload.id
        );
        if (item.removeingredients?.length === 0) item.removeIngredients = [];
        item.removeIngredients.push(action.payload.target);
      },
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export const getCart = (state) => state.cart.cart;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export const selectTotalsOfCart = createSelector(getCart, (cart) =>
  cart.reduce(
    (sum, item) => {
      return {
        totalCartQuantity: item.quantity + sum.totalCartQuantity,
        totalCartPrice: item.unitPrice * item.quantity + sum.totalCartPrice,
      };
    },
    { totalCartQuantity: 0, totalCartPrice: 0 }
  )
);
export default cartSlice.reducer;
