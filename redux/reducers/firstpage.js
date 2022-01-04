import {
  APARTMENT_HOST_BTN,
  HOUSE_HOST_BTN,
  SECONDARYUNIT_HOST_BTN,
  BEDNBREAKFAST_HOST_BTN,
  BOUTIQUEHOTEL_HOST_BTN,
} from "../actionTypes";
const initialState = {
  apartmentValue: "",
  houseValue: "",
  secondaryunitValue: "",
  bednbreakfastValue: "",
  boutiquehotelValue: "",
};
const firstpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case APARTMENT_HOST_BTN:
      return {
        ...state,
        apartmentValue: (state.apartmentValue = "Apartment"),
      };
    case HOUSE_HOST_BTN:
      return {
        ...state,
        houseValue: (state.houseValue = "House"),
      };
    case SECONDARYUNIT_HOST_BTN:
      return {
        ...state,
        secondaryunitValue: (state.secondaryunitValue = "Secondary Unit"),
      };

    case BEDNBREAKFAST_HOST_BTN:
      return {
        ...state,
        bednbreakfastValue: (state.bednbreakfastValue = "Bed and Breakfast"),
      };
    case BOUTIQUEHOTEL_HOST_BTN:
      return {
        ...state,
        boutiquehotelValue: (state.boutiquehotelValue = "Boutique Hotel"),
      };

    default:
      return state;
  }
};

export default firstpageReducer;
