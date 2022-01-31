import { put, takeEvery, call } from "redux-saga/effects";
import Swal from "sweetalert2";

import {
  getPostsOkAction,
  getPostsErrorAction,
  deletePostOkAction,
  deletePostErrorAction,
  editPostOkAction,
  editPostAction,
} from "../../actions/posts-actions";

import { deletePost, editPost, fetchAllPosts } from "../../../network/api-requests/posts-api";
import {
  DELETE_POST_PENDING,
  EDIT_POST_PENDING,
  GET_POSTS_PENDING,
} from "../../action-types";

// fetch posts
// worker saga
function* getAllPosts() {
  try {
    const { data } = yield call(fetchAllPosts);
    yield getPostsOkAction(data);
  } catch (error) {
    yield put(getPostsErrorAction());
  }
}

// watcher saga
export function* getAllPostsSaga() {
  yield takeEvery(GET_POSTS_PENDING, getAllPosts);
}

// Delete post
// worker saga
function* deletePostHabdler(action) {
  const id = action.payload;
  try {
    yield call(deletePost, id);
    yield deletePostOkAction();
    Swal.fire({
      title: "Deleted!",
      text: "The post has been deleted.",
      icon: "success",
      confirmButtonColor: "#62a086",
    });
  } catch (error) {
    yield deletePostErrorAction();
  }
}

// watcher saga
export function* deletePostSaga() {
  yield takeEvery(DELETE_POST_PENDING, deletePostHabdler);
}


// Edit post
// worker saga
function* editPostHandler(action) {
  const post = action.post
  try {
    yield call(editPost, post)
    yield editPostOkAction(post)
     // Alert
    Swal.fire({
      title: 'Updated!',
      text: 'The post has been updated.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield editPostAction()
  }
}

// watcher saga
export function* editPostSaga() {
  yield takeEvery(EDIT_POST_PENDING, editPostHandler)
}