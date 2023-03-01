import { configureStore } from "@reduxjs/toolkit";

import { dataReducer } from "./reducers/dataReducer";
import { stateReducer } from "./reducers/stateReducer";
import { viewReducer } from "./reducers/viewReducer";

const store = configureStore({
  reducer: { data: dataReducer, view: viewReducer, state: stateReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
