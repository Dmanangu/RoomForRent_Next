import {
  RENTALUNIT_HOST_BTN,
  LOFT_HOST_BTN,
  CONDOMINIUM_HOST_BTN,
} from "../actionTypes";
const initialState = {
  rentalunitValue: "",
  loftValue: "",
  condominiumValue: "",
};
const secondpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENTALUNIT_HOST_BTN:
      return {
        ...state,
        rentalunitValue: (state.rentalunitValue = "Rental Unit"),
      };
    case LOFT_HOST_BTN:
      return {
        ...state,
        loftValue: (state.loftValue = "Loft"),
      };
    case CONDOMINIUM_HOST_BTN:
      return {
        ...state,
        condominiumValue: (state.condominiumValue = "Condominium"),
      };
    default:
      return state;
  }
};

export default secondpageReducer;
