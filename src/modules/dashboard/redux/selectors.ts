import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { authSlice } from "./slice";

const selectAuthState = (state: RootState) => state[authSlice.name];

const selectLoggedInUser = createSelector(
  selectAuthState,
  (state) => state.user
);

const isUserLoggedIn = createSelector(selectAuthState, (state) => !!state.user);

export { selectLoggedInUser, isUserLoggedIn };
