import { BEDS_HOST_BTN } from "../../actionTypes";
const initialState = {
  bedsValue: 0,
};
const bedsbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEDS_HOST_BTN:
      return {
        ...state,
        bedsValue: state.bedsValue + 1,
      };
    default:
      return state;
  }
};
export default bedsbtnReducer;
