import { RENTALUNIT_HOST_BTN } from "../../actionTypes";
const initialState = {
  rentalunitValue: "",
};
const sixthbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENTALUNIT_HOST_BTN:
      return {
        ...state,
        rentalunitValue: (state.rentalunitValue = "Rental Unit"),
      };
    default:
      return state;
  }
};

export default sixthbtnReducer;
