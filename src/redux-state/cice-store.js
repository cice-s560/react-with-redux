import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ciceReducer from "./cice-reducer";
import secondReducer from "./cice-second-reducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  cice: ciceReducer,
  comunicacion: secondReducer
});
const middlewares = applyMiddleware(logger, thunk);
// Inyectamos en Window una constante para poder conectar al DevTools
const composeEnhancers = composeWithDevTools(middlewares);

export default createStore(reducers, composeEnhancers);
