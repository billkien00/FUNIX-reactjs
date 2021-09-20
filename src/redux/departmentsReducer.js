import * as ActionTypes from "./ActionTypes";

export const departmentsReducer = (
  state = {
    dep: [],
    isLoading: true,
    errMessage: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        ...{ isLoading: false, errMessage: null, dep: action.payload },
      };

    case ActionTypes.DEPARTMENT_FAILED:
      return {
        ...state,
        ...{ isLoading: false, errMessage: action.payoad, dep: [] },
      };

    case ActionTypes.DEPARTMENT_LOADING:
      return { ...state, ...{ isLoading: true, errMessage: null, dep: [] } };

    default:
      return state;
  }
};
