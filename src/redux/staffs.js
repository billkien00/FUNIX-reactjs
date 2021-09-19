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
        return {...state, isLoading = false, errMessage: null, staffs = action.payload}
      break;
    case ActionTypes.STAFF_FAILED:
        return {...state, isLoading = false, errMessage: action.payoad, staffs: [] }

      break;
    case ActionTypes.STAFF_LOADING:
        return {...state, isLoading = true, errMessage: null, staffs: [] }
      break;

    default:
      break;
  }
};
