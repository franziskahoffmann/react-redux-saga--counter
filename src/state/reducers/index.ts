import { combineReducers } from "redux";
import counterReducer, { initStateounterReducer } from "./counterReducer";

export const initReducer = {
  counter: initStateounterReducer,
};
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
