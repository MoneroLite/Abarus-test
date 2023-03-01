import { DataAction, DataState } from "../types";
import { ActionType } from "../actions/types";

const initialState: DataState = {
  posts: null,
  searchedPosts: null,
};

export const dataReducer = (
  state = initialState,
  action: DataAction
): DataState => {
  switch (action.type) {
    case ActionType.UPDATE_POSTS:
      return { ...state, posts: action.payload };
    case ActionType.UPDATE_SEARCHED_POSTS:
      return { ...state, searchedPosts: action.payload };
    default:
      return state;
  }
};
