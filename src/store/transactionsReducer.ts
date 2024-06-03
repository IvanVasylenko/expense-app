import { createSlice } from '@reduxjs/toolkit';

import { Transaction } from '../types';

import type { RootState } from './index';

type TransactionsState = Transaction[];

const initialState: TransactionsState = [];

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
    removeTransaction: (state, action) => {
      return state.filter((transaction) => transaction.id !== action.payload);
    },
  },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;

export const selectCount = (state: RootState) => state.transactions;

export default transactionsSlice.reducer;
