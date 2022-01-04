import { APARTMENT_HOST_BTN } from "../../actionTypes";
const initialState = {
  apartmentValue: "",
};
const firstbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case APARTMENT_HOST_BTN:
      return {
        ...state,
        apartmentValue: (state.apartmentValue = "Apartment"),
      };
    default:
      return state;
  }
};

export default firstbtnReducer;
