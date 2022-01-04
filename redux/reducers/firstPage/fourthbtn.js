import { BEDNBREAKFAST_HOST_BTN } from "../../actionTypes";
const initialState = {
  bednbreakfastValue: "",
};
const fourthbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEDNBREAKFAST_HOST_BTN:
      return {
        ...state,
        bednbreakfastValue: (state.bednbreakfastValue = "Bed and Breakfast"),
      };
    default:
      return state;
  }
};

export default fourthbtnReducer;
