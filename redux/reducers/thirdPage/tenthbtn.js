import { APRIVATEROOM_HOST_BTN } from "../../actionTypes";
const initialState = {
  aprivateroomValue: "",
};
const tenthbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case APRIVATEROOM_HOST_BTN:
      return {
        ...state,
        aprivateroomValue: (state.aprivateroomValue = "A Private Room"),
      };
    default:
      return state;
  }
};

export default tenthbtnReducer;
