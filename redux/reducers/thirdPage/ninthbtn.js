import { ANENTIREPLACE_HOST_BTN } from "../../actionTypes";
const initialState = {
  anentireplaceValue: "",
};
const ninthbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANENTIREPLACE_HOST_BTN:
      return {
        ...state,
        anentireplaceValue: (state.anentireplaceValue = "An Entire Place"),
      };
    default:
      return state;
  }
};

export default ninthbtnReducer;
