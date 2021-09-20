import * as ActionTypes from "./ActionTypes";

export const moneyReducer = (
  state = {
    money: [],
    isLoading: true,
    errMessage: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_MONEY:
      return {
        ...state,
        ...{
          isLoading: false,
          errMessage: null,
          money: action.payload,
        },
      };

    case ActionTypes.MONEY_FAILED:
      return {
        ...state,
        ...{
          isLoading: false,
          errMessage: action.payoad,
          money: [],
        },
      };

    case ActionTypes.MONEY_LOADING:
      return {
        ...state,
        ...{
          isLoading: true,
          errMessage: null,
          money: [],
        },
      };
    default:
      return state;
  }
};
