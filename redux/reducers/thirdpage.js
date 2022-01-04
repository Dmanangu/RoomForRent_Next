import {
  ANENTIREPLACE_HOST_BTN,
  APRIVATEROOM_HOST_BTN,
  ASHAREDROOM_HOST_BTN,
} from "../actionTypes";
const initialState = {
  anentireplaceValue: "",
  aprivateroomValue: "",
  asharedroomValue: "",
};
const thirdpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANENTIREPLACE_HOST_BTN:
      return {
        ...state,
        anentireplaceValue: (state.anentireplaceValue = "An Entire Place"),
      };
    case APRIVATEROOM_HOST_BTN:
      return {
        ...state,
        aprivateroomValue: (state.aprivateroomValue = "A Private Room"),
      };
    case ASHAREDROOM_HOST_BTN:
      return {
        ...state,
        asharedroomValue: (state.asharedroomValue = "A Shared Room"),
      };
    default:
      return state;
  }
};

export default thirdpageReducer;
