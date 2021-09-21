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

export const addDepartmentStaff = (deps) => ({
  type: ActionTypes.ADD_DEPARTMENT_STAFF,
  payload: deps,
});

export const departmentStaffLoading = () => ({
  type: ActionTypes.DEPARTMENT_STAFF_LOADING,
});

export const departmentStaffFailed = (errMessage) => ({
  type: ActionTypes.DEPARTMENT_STAFF_FAILED,
  payload: errMessage,
});

export const fetchDepartmentsStaff = (id) => (dispatch) => {
  dispatch(departmentStaffLoading());
  fetch(`${baseUrl}departments/${id}`)
    .then((response) => response.json())
    .then((dep) => dispatch(addDepartmentStaff(dep)))
    .catch((err) => dispatch(departmentStaffFailed(err.message)));
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
    .then((money) => dispatch(addMoney(money)))
    .catch((err) => dispatch(moneyFailed(err.message)));
};
