import { CONDOMINIUM_HOST_BTN } from "../../actionTypes";
const initialState = {
  condominiumValue: "",
};
const eightbtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONDOMINIUM_HOST_BTN:
      return {
        ...state,
        condominiumValue: (state.condominiumValue = "Condominium"),
      };
    default:
      return state;
  }
};

export default eightbtnReducer;
