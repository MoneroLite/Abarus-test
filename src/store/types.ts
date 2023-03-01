import { Axios } from "axios";
import { CombinedState } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppStatus } from "./consts";

import { ActionType } from "./actions/types";

// data

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type Posts = Array<Post>;

export type AppStatusType = keyof typeof AppStatus;

// reducers

export interface DataState {
  posts: Posts;
  searchedPosts: Posts;
}

export interface ViewState {
  pagesCount: number;
}

export interface StateState {
  appStatus: AppStatusType;
}

export type Dispatch = ThunkDispatch<
  CombinedState<{
    data: DataState;
    user: ViewState;
  }>,
  Axios,
  Action
>;

// actions

export interface UpdatePosts {
  type: typeof ActionType.UPDATE_POSTS;
  payload: Posts;
}

export interface UpdateSearchedPosts {
  type: typeof ActionType.UPDATE_SEARCHED_POSTS;
  payload: Posts;
}

export interface UpdatePagesCount {
  type: typeof ActionType.UPDATE_PAGES_COUNT;
  payload: number;
}

export interface ChangeAppStatus {
  type: typeof ActionType.CHANGE_APP_STATUS;
  payload: AppStatusType;
}

export type DataAction = UpdatePosts | UpdateSearchedPosts;
export type ViewAction = UpdatePagesCount;
export type StateAction = ChangeAppStatus;
export type Action = DataAction | ViewAction | StateAction;
