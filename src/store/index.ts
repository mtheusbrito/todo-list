import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import {ITaskState } from "./modules/task/types";

export interface IState {
  task: ITaskState;
}
const sagaMiddleware = createSagaMiddleware();
const middlers = [sagaMiddleware];
export const store = configureStore({
  reducer: rootReducer,
  middleware: middlers,
});
 sagaMiddleware.run(rootSaga);