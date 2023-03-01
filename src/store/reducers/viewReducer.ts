import { ViewAction, ViewState } from "../types";
import { ActionType } from "../actions/types";

const initialState: ViewState = {
  pagesCount: null,
};

export const viewReducer = (
  state = initialState,
  action: ViewAction
): ViewState => {
  switch (action.type) {
    case ActionType.UPDATE_PAGES_COUNT:
      return { ...state, pagesCount: action.payload };
    default:
      return state;
  }
};
