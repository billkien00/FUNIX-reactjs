// export const initialState = {
//   staff: STAFFS,
//   department: DEPARTMENTS,
// };
// export const Reducer = (state = initialState, action) => {
//   return state;
// };
// import { STAFFS } from "../shared/staffs";
// import { DEPARTMENTS } from "../shared/staffs";

import { combineReducers } from "redux";
import { staffsReducer } from "./staffsReducer";
import { departmentsReducer } from "./departmentsReducer";

export const rootReducer = combineReducers({
  staff: staffsReducer,
  department: departmentsReducer,
});
