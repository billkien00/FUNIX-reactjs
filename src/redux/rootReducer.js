// export const initialState = {
//   staff: STAFFS,
//   department: DEPARTMENTS,
// };
// export const Reducer = (state = initialState, action) => {
//   return state;
// };

import { combineReducers } from "redux";
import { DEPARTMENTS } from "../shared/staffs";
import { STAFFS } from "../shared/staffs";
import { staffsReducer } from "./staffsReducer";

export const rootReducer = combineReducers({
  staff: STAFFS,
  department: DEPARTMENTS,
});
