import { baseUrl } from "./baseUrl";
import * as ActionTypes from "./ActionTypes";

export const Staffs = (
  state = {
    staffs: [],
    isLoading: true,
    errMessage: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFF:
        return {...state, staffs = action.payload}
      break;
    case ActionTypes.STAFF_FAILED:
        return {...state, }

      break;
    case ActionTypes.STAFF_LOADING:
        return {...state, isLoading = {err} }
      break;

    default:
      break;
  }
};
