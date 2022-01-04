import { GUEST_HOST_BTN } from "../../actionTypes";
const initialState = {
  guestValue: 0,
};
const guestbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUEST_HOST_BTN:
      return {
        ...state,
        guestValue: state.guestValue + 1,
      };
    default:
      return state;
  }
};
export default guestbtnReducer;
