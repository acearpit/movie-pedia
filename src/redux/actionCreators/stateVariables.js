import { SET_STATE_VARIABLE } from "../actionConstants";

export const setStateVariable = (svType, val) => {
  return {
    type: SET_STATE_VARIABLE,
    svType,
    val,
  };
};
