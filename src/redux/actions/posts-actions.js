import * as type from "../action-types";
import store from "../store";

//  posts actions
const getAllPosts = () => ({
  type: type.GET_POSTS_PENDING,
  payload: true,
});

const getPostsOk = (posts) => ({
  type: type.GET_POSTS_OK,
  payload: posts,
});

const getPostsError = () => ({
  type: type.GET_POSTS_ERROR,
  payload: true,
});

export const getAllPostsAction = () => store.dispatch(getAllPosts());

export const getPostsOkAction = (posts) => store.dispatch(getPostsOk(posts));

export const getPostsErrorAction = () => store.dispatch(getPostsError());

// Delete post
const deletePostPending = (id) => ({
  type: type.DELETE_POST_PENDING,
  payload: id,
});

const deletePostOk = () => ({
  type: type.DELETE_POST_OK,
});

const deletePostError = () => ({
  type: type.DELETE_POST_ERROR,
  payload: true,
});

export const deletePostAction = (id) => store.dispatch(deletePostPending(id));

export const deletePostOkAction = () => store.dispatch(deletePostOk());

export const deletePostErrorAction = () => store.dispatch(deletePostError());

// Edit post
const retrievePostAction = (post) => ({
  type: type.GET_POST_EDIT,
  payload: post,
});

const editPost = (post) => ({
  type: type.EDIT_POST_PENDING,
  post: post,
});

const editPostOk = (post) => ({
  type: type.EDIT_POST_OK,
  payload: post,
});

const editPostError = () => ({
  type: type.EDIT_POST_ERROR,
  payload: true,
});

export const retrievePostEditAction = (post) =>
  store.dispatch(retrievePostAction(post));

export const editPostAction = (post) => store.dispatch(editPost(post));

export const editPostOkAction = (post) => store.dispatch(editPostOk(post));

export const editPostErrorAction = () => store.dispatch(editPostError());
