import * as type from "../action-types";

const initialState = {
  posts: [],
  error: false,
  loading: false,
  deletePost: null,
  post: {},
};

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_POSTS_PENDING:
    case type.EDIT_POST_PENDING:
      return {
        ...state,
        loading: action.payload,
        post: action.post,
      };

    case type.GET_POSTS_ERROR:
    case type.DELETE_POST_ERROR:
    case type.EDIT_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.GET_POSTS_OK:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };

    case type.DELETE_POST_PENDING:
      return {
        ...state,
        deletePost: action.payload,
      };

    case type.DELETE_POST_OK:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== state.deletePost),
        deletePost: null,
      };

    case type.GET_POST_EDIT:
      return {
        ...state,
        post: action.payload,
        editPost: action.payload,
      };

    case type.EDIT_POST_OK:
      return {
        ...state,
        editPost: null,
        post: action.post,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? (post = action.payload) : post
        ),
      };

    default:
      return state;
  }
}
