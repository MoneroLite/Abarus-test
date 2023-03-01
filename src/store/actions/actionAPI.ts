import axios from "axios";

import { AppStatus, VIEW_COUNT } from "../consts";
import { Dispatch } from "../types";
import { ActionCreator } from "./index";

const GET_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => {
  return async (dispatch: Dispatch) => {
    let response;

    try {
      response = await axios.get(GET_POSTS_URL);
    } catch (error) {
      console.error(error);
      dispatch(ActionCreator.changeAppStatus(AppStatus.ERROR));
    }
    dispatch(ActionCreator.updatePosts(response.data));
    dispatch(
      ActionCreator.updatePagesCount(
        Math.ceil(response.data.length / VIEW_COUNT)
      )
    );
    dispatch(ActionCreator.changeAppStatus(AppStatus.READY));
  };
};
