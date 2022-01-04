import { createStore, combineReducers } from "redux";

import firstpageReducer from "./reducers/firstpage";
import secondpageReducer from "./reducers/secondpage";
import thirdpageReducer from "./reducers/thirdpage";
import fourthpageReducer from "./reducers/fourthpage";
import fifthpageReducer from "./reducers/fifthpage";

const rootReducer = combineReducers({
  firstpage: firstpageReducer,
  secondpage: secondpageReducer,
  thirdpage: thirdpageReducer,
  fourthpage: fourthpageReducer,
  fifthpage: fifthpageReducer,
});
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
