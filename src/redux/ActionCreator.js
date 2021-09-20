import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staffs,
});

export const staffLoading = () => ({
  type: ActionTypes.STAFF_LOADING,
});

export const staffFailed = (errMessage) => ({
  type: ActionTypes.STAFF_FAILED,
  payload: errMessage,
});

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffLoading());
  fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)))
    .catch((err) => dispatch(staffFailed(err.message)));
};

export const addDepartment = (deps) => ({
  type: ActionTypes.ADD_DEPARTMENT,
  payload: deps,
});

export const departmentLoading = () => ({
  type: ActionTypes.DEPARTMENT_LOADING,
});

export const departmentFailed = (errMessage) => ({
  type: ActionTypes.DEPARTMENT_FAILED,
  payload: errMessage,
});

export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentLoading());
  fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((dep) => dispatch(addDepartment(dep)))
    .catch((err) => dispatch(departmentFailed(err.message)));
};

export const addMoney = (money) => ({
  type: ActionTypes.ADD_MONEY,
  payload: money,
});

export const moneyLoading = () => ({
  type: ActionTypes.MONEY_LOADING,
});

export const moneyFailed = (errMessage) => ({
  type: ActionTypes.MONEY_FAILED,
  payload: errMessage,
});

export const fetchMoney = () => (dispatch) => {
  dispatch(moneyLoading());
  fetch(baseUrl + "staffsSalary")
    .then((response) => response.json())
    .then((money) => dispatch(addDepartment(money)))
    .catch((err) => dispatch(departmentFailed(err.message)));
};
