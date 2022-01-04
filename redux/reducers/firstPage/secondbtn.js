import { HOUSE_HOST_BTN } from "../../actionTypes";
const initialState = {
  houseValue: "",
};
const secondbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOUSE_HOST_BTN:
      return {
        ...state,
        houseValue: (state.houseValue = "House"),
      };
    default:
      return state;
  }
};

export default secondbtnReducer;
