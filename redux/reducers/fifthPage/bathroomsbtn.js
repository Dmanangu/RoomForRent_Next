import { BATHROOMS_HOST_BTN } from "../../actionTypes";
const initialState = {
  bathroomsValue: 0,
};
const bathroomsbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case BATHROOMS_HOST_BTN:
      return {
        ...state,
        bathroomsValue: state.bathroomsValue + 1,
      };
    default:
      return state;
  }
};
export default bathroomsbtnReducer;
