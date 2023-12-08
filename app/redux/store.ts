import { configureStore } from "@reduxjs/toolkit";
import { navSlice } from './features/nav/navSlice';
import uiSlice from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    ui: uiSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch