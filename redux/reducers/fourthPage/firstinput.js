import { LOCATION_HOST_INPUT } from "../../actionTypes";
const initialState = {
  locationValue: "",
};
const firstinputReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_HOST_INPUT:
      return {
        ...state,
        locationValue: action.payload.locationValue,
      };
    default:
      return state;
  }
};
export default firstinputReducer;
