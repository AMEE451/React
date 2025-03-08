import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { postReducer } from "./Reducer";
import { thunk } from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       
      })
    : compose;
const rootReducer=combineReducers({
    post:postReducer
})

export const Store=legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)