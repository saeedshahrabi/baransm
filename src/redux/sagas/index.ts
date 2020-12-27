import { all } from "redux-saga/effects";
import userSaga from "./userSaga";

export default function* rootsaga() {
  yield all([userSaga()]);
}
