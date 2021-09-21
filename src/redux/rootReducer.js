import { combineReducers } from "redux";
import { staffsReducer } from "./staffsReducer";
import { departmentsReducer } from "./departmentsReducer";
import { moneyReducer } from "./moneyReducer";
import { departmentStaffReducer } from "./departmentStaffReducer";

export const rootReducer = combineReducers({
  staff: staffsReducer,
  department: departmentsReducer,
  money: moneyReducer,
  departmentStaffReducer: departmentStaffReducer,
});
