import { LOFT_HOST_BTN } from "../../actionTypes";
const initialState = {
  loftValue: "",
};
const seventhbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOFT_HOST_BTN:
      return {
        ...state,
        loftValue: (state.loftValue = "Loft"),
      };
    default:
      return state;
  }
};

export default seventhbtnReducer;
