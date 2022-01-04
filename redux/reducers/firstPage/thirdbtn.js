import { SECONDARYUNIT_HOST_BTN } from "../../actionTypes";
const initialState = {
  secondaryunitValue: "",
};
const thirdbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SECONDARYUNIT_HOST_BTN:
      return {
        ...state,
        secondaryunitValue: (state.secondaryunitValue = "Secondary Unit"),
      };
    default:
      return state;
  }
};

export default thirdbtnReducer;
