import { all } from "redux-saga/effects";
import { deletePostSaga, editPostSaga, getAllPostsSaga } from "./handler/posts-handler";

export default function* rootSaga() {
  yield all([getAllPostsSaga(), deletePostSaga(), editPostSaga()]);
}