import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: [],
};
const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, { payload }) => {
      state.transaction = payload;
    },
  },
});

const { reducer, actions } = transactionSlice;
export const { setTransaction } = actions;

export default reducer;
