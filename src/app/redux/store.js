// store.js
"use client";
import { configureStore } from "@reduxjs/toolkit";
import reactFlowSlice from "./reactFlowSlice";

const store = configureStore({
  reducer: {
    reactFlow: reactFlowSlice,
    // Add other reducers here if needed
  },
});

export default store;
