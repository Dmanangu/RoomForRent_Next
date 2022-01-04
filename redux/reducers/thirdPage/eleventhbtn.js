import { ASHAREDROOM_HOST_BTN } from "../../actionTypes";
const initialState = {
  asharedroomValue: "",
};
const eleventhbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASHAREDROOM_HOST_BTN:
      return {
        ...state,
        asharedroomValue: (state.asharedroomValue = "A Shared Room"),
      };
    default:
      return state;
  }
};

export default eleventhbtnReducer;
