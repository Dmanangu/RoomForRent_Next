import { createStore, combineReducers } from "redux";

import firstbtnReducer from "./reducers/firstPage/firstbtn";
import secondbtnReducer from "./reducers/firstPage/secondbtn";
import thirdbtnReducer from "./reducers/firstPage/thirdbtn";
import fourthbtnReducer from "./reducers/firstPage/fourthbtn";
import fifthbtnReducer from "./reducers/firstPage/fifthbtn";

import sixthbtnReducer from "./reducers/secondPage/sixthbtn";
import seventhbtnReducer from "./reducers/secondPage/seventhbtn";
import eightbtnReducer from "./reducers/secondPage/eightbtn";

import ninthbtnReducer from "./reducers/thirdPage/ninthbtn";
import tenthbtnReducer from "./reducers/thirdPage/tenthbtn";
import eleventhbtnReducer from "./reducers/thirdPage/eleventhbtn";

import firstinputReducer from "./reducers/fourthPage/firstinput";

import guestbtnReducer from "./reducers/fifthPage/guestbtn";
import bedsbtnReducer from "./reducers/fifthPage/bedsbtn";
import bedroomsbtnReducer from "./reducers/fifthPage/bedroomsbtn";
import bathroomsbtnReducer from "./reducers/fifthPage/bathroomsbtn";

const rootReducer = combineReducers({
  firstbtn: firstbtnReducer,
  secondbtn: secondbtnReducer,
  thirdbtn: thirdbtnReducer,
  fourthbtn: fourthbtnReducer,
  fifthbtn: fifthbtnReducer,

  sixthbtn: sixthbtnReducer,
  seventhbtn: seventhbtnReducer,
  eightbtn: eightbtnReducer,

  ninthbtn: ninthbtnReducer,
  tenthbtn: tenthbtnReducer,
  eleventhbtn: eleventhbtnReducer,

  firstinput: firstinputReducer,

  guestbtn: guestbtnReducer,
  bedsbtn: bedsbtnReducer,
  bedroomsbtn: bedroomsbtnReducer,
  bathroomsbtn: bathroomsbtnReducer,
});
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
