import { configureStore } from "@reduxjs/toolkit";
import {filterSlice} from './contactSlise';
import {contactsApi} from './contactsApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]:contactsApi.reducer,
    filter:filterSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(contactsApi.middleware),
});

