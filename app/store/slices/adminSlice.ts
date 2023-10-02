"use client";

import { createSlice } from "@reduxjs/toolkit";

interface AdminState {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  token: string;
}

const initialState: AdminState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  role: "admin",
  token: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
  },
});

export const { setAdmin } = adminSlice.actions;

export default adminSlice.reducer;
