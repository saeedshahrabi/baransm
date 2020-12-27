import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./sagas/index";

const SagaMiddleware = createSagaMiddleware();
// const store = compose((window as any).devToolsExtension && (window as any).devToolsExtension())(createStore)(rootReducer);
const store = compose(applyMiddleware(SagaMiddleware))(createStore)(rootReducer);
SagaMiddleware.run(rootsaga);
export default store;
