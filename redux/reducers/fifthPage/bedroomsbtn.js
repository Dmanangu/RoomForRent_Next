import { BEDSROOMS_HOST_BTN } from "../../actionTypes";
const initialState = {
  bedroomsValue: 0,
};
const bedroomsbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEDSROOMS_HOST_BTN:
      return {
        ...state,
        bedroomsValue: state.bedroomsValue + 1,
      };
    default:
      return state;
  }
};
export default bedroomsbtnReducer;
