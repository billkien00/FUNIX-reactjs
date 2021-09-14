import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";

export const initialState = {
  staff: STAFFS,
  department: DEPARTMENTS,
};
export const Reducer = (state = initialState, action) => {
  return state;
};
