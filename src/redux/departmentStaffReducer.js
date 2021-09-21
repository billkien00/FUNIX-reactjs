import * as ActionTypes from "./ActionTypes";

export const departmentStaffReducer = (
  state = {
    depStaff: [],
    isLoading: true,
    errMessage: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENT_STAFF:
      return {
        ...state,
        ...{ isLoading: false, errMessage: null, depStaff: action.payload },
      };

    case ActionTypes.DEPARTMENT_STAFF_FAILED:
      return {
        ...state,
        ...{ isLoading: false, errMessage: action.payoad, depStaff: [] },
      };

    case ActionTypes.DEPARTMENT_STAFF_LOADING:
      return {
        ...state,
        ...{ isLoading: true, errMessage: null, depStaff: [] },
      };

    default:
      return state;
  }
};
