import { SUMA, RESTA, FETCH_USERS } from "./cice-actions";
import { ASYNC_TIMER, ASYNC_TIMER_SUCCESS } from "./async-actions";

const initialState = {
  counter: 3,
  users: [],
  isTimerRunning: false,
  timerIsFinished: false
};

function ciceReducer(prevState = initialState, action) {
  switch (action.type) {
    case SUMA:
      return {
        ...prevState,
        counter: prevState.counter + action.payload.amount
      };
    case RESTA:
      return {
        ...prevState,
        counter: prevState.counter - action.payload.amount
      };
    case FETCH_USERS:
      return {
        ...prevState,
        users: action.payload.users
      };
    case ASYNC_TIMER:
      return {
        ...prevState,
        isTimerRunning: true
      };
    case ASYNC_TIMER_SUCCESS:
      return {
        ...prevState,
        isTimerRunning: false,
        timerIsFinished: true
      };
    default:
      return prevState;
  }
}

export default ciceReducer;
