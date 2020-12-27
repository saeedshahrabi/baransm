import { call, put, takeEvery } from "redux-saga/effects";

const apiURL = "https://jsonplaceholder.typicode.com/users";

function getApi() {
  return fetch(apiURL, {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => {
      throw e;
    });
}

function* fetchUsers(actions: any) {
  try {
    const users = yield call(getApi);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (error) {
    yield put({ type: "GET_USERS_FAILED", message: error.message });
  }
}

function* userSaga() {
  yield takeEvery("GET_USER_REQUSTED", fetchUsers);
}
export default userSaga;
