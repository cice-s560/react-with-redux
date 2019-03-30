//////////////////////////
// THUNKS
export function startAsyncTimer() {
  return function(dispatch) {
    // Ejecución síncrona
    dispatch(asyncTimer());

    // Inicio proceso asíncrono
    setTimeout(() => {
      // Respuesta asíncrona
      dispatch(asynTimerSuccess());
    }, 3000);
  };
}

//////////////////////////
// ACTIONS
export const ASYNC_TIMER = "ASYNC_TIMER";
export function asyncTimer() {
  return {
    type: ASYNC_TIMER
  };
}

export const ASYNC_TIMER_SUCCESS = "ASYNC_TIMER_SUCCESS";
export function asynTimerSuccess() {
  return {
    type: ASYNC_TIMER_SUCCESS
  };
}

// export const ASYNC_TIMER_FAIL = "ASYNC_TIMER_FAIL";
// export function asynTimerError() {
//   return {
//     type: ASYNC_TIMER_FAIL
//   };
// }
