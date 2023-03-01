import { AppStatus } from "../consts";
import { StateAction, StateState } from "../types";
import { ActionType } from "../actions/types";

const initialState: StateState = {
  appStatus: AppStatus.LOADING,
};

export const stateReducer = (
  state = initialState,
  action: StateAction
): StateState => {
  switch (action.type) {
    case ActionType.CHANGE_APP_STATUS:
      return { ...state, appStatus: action.payload };

    default:
      return state;
  }
};
