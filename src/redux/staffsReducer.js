import * as ActionTypes from "./ActionTypes";

export const staffsReducer = (
  state = {
    staffs: [],
    isLoading: true,
    errMessage: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFF:
      return {
        ...state,
        ...{
          isLoading: false,
          errMessage: null,
          staffs: action.payload,
        },
      };

    case ActionTypes.POST_STAFF:
      return {
        ...state,
        ...{
          isLoading: false,
          errMessage: null,
          staffs: action.payload,
        },
      };

    case ActionTypes.STAFF_FAILED:
      return {
        ...state,
        ...{
          isLoading: false,
          errMessage: action.payoad,
          staffs: [],
        },
      };

    case ActionTypes.STAFF_LOADING:
      return {
        ...state,
        ...{
          isLoading: true,
          errMessage: null,
          staffs: [],
        },
      };

    default:
      return state;
  }
};
