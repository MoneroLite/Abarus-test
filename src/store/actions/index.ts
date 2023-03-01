import {
  AppStatusType,
  ChangeAppStatus,
  Posts,
  UpdatePagesCount,
  UpdatePosts,
  UpdateSearchedPosts,
} from "../types";

import { ActionType } from "./types";

export const ActionCreator = {
  updatePosts: (posts: Posts): UpdatePosts => ({
    type: ActionType.UPDATE_POSTS,
    payload: posts,
  }),
  updateSearchedPosts: (searchedPosts: Posts): UpdateSearchedPosts => ({
    type: ActionType.UPDATE_SEARCHED_POSTS,
    payload: searchedPosts,
  }),
  updatePagesCount: (pagesCount: number): UpdatePagesCount => ({
    type: ActionType.UPDATE_PAGES_COUNT,
    payload: pagesCount,
  }),
  changeAppStatus: (appStatus: AppStatusType): ChangeAppStatus => ({
    type: ActionType.CHANGE_APP_STATUS,
    payload: appStatus,
  }),
};
