import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Define the default state for the cart
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// Function to retrieve the cart state from local storage, or return the default state if not found
const getCartFromLoacalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

// Create a slice of the Redux store for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLoacalStorage(), // Initial state, retrieved from local storage
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const { product } = action.payload; // Extract the product from the action payload
      const item = state.cartItems.find((i) => {
        i.cartID === product.cartID; // Find if the product already exists in the cart
      });
      if (item) {
        item.amount += product.amount; // If item exists, increase the amount
      } else {
        state.cartItems.push(product); // If item doesn't exist, add it to the cart
      }

      state.numItemsInCart += product.amount; // Update the total number of items in the cart
      state.cartTotal += product.price * product.amount; // Update the cart total
      cartSlice.caseReducers.calculateTotals(state); // Recalculate the totals
      toast.success("Item added to cart"); // Show a success message
    },
    // Reducer to clear the cart
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      const { cartID } = action.payload; // Extract the cartID from the action payload
      const product = state.cartItems.find((i) => i.cartID === cartID); // Find the product in the cart
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID); // Remove the product from the cart
      state.numItemsInCart -= product.amount; // Update the total number of items in the cart
      state.cartTotal -= product.price * product.amount; // Update the cart total
      cartSlice.caseReducers.calculateTotals(state); // Recalculate the totals
      toast.error("Item removed from cart"); // Show an error message
    },
    // Reducer to edit an item in the cart
    editItem: (state, action) => {
      const { cartID, amount } = action.payload; // Extract the cartID and amount from the action payload
      const item = state.cartItems.find((i) => i.cartID === cartID); // Find the item in the cart
      state.numItemsInCart += amount - item.amount; // Update the total number of items in the cart
      state.cartTotal += item.price * (amount - item.amount); // Update the cart total
      item.amount = amount; // Update the item's amount
      cartSlice.caseReducers.calculateTotals(state); // Recalculate the totals
      toast.success("Cart updated"); // Show a success message
    },
    // Reducer to calculate the totals (tax, order total, etc.)
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal; // Calculate the tax as 10% of the cart total
      state.orderTotal = state.cartTotal + state.shipping + state.tax; // Calculate the order total
      localStorage.setItem("cart", JSON.stringify(state)); // Save the updated state to local storage
    },
  },
});

// Export the action creators
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
