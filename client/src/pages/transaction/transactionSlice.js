import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};
const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, { action }) => {
      state.transactions = action;
    },
  },
});

const { reducer, actions } = transactionSlice;
export const { setTransactions } = actions;

export default reducer;
