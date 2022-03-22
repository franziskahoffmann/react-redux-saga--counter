import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import rootReducer, { initReducer } from "./state/reducers";
import { ActionType } from "./state/action-types";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const action = (type: ActionType) => {
  store.dispatch({ type });
};

export default store;
