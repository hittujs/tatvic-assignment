import {
  configureStore,
  combineReducers,
  StateFromReducersMapObject,
  ActionFromReducersMapObject,
  Reducer,
} from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch } from "react-redux";
import { authSlice } from "./modules/dashboard/redux";

type ReducersMapObject = typeof reducers;

const reducers = {
  [authSlice.name]: authSlice.reducer,
};

export type RootState = StateFromReducersMapObject<ReducersMapObject>;
export type PreloadedState = Partial<RootState>;

const reducer: Reducer<
  RootState,
  ActionFromReducersMapObject<ReducersMapObject>
> = combineReducers(reducers);

export const createStore = (preloadedState?: PreloadedState) =>
  configureStore({
    reducer,
    preloadedState,
  });

export type Store = ReturnType<typeof createStore>;

export type AppDispatch = Store["dispatch"];

export const useDispatch = () => useReduxDispatch<AppDispatch>();
