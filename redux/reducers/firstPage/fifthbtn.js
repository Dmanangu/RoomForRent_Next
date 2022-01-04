import { BOUTIQUEHOTEL_HOST_BTN } from "../../actionTypes";
const initialState = {
  boutiquehotelValue: "",
};
const fifthbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOUTIQUEHOTEL_HOST_BTN:
      return {
        ...state,
        boutiquehotelValue: (state.boutiquehotelValue = "Boutique Hotel"),
      };
    default:
      return state;
  }
};

export default fifthbtnReducer;
