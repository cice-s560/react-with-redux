import React from "react";
import { connect } from "react-redux";
import { startAsyncTimer } from "../../redux-state/async-actions";

const TimerComponent = props => (
  <div styles="background: #000;">
    <p>
      Usa nuestro crono{" "}
      <button onClick={() => props.startCrono()}>Start</button>
    </p>
    {props.isTimerRunning && !props.timerIsFinished && (
      <p styles="color: gold;">Timer runnning...</p>
    )}
    {!props.isTimerRunning && props.timerIsFinished && (
      <p styles="color: green;">Timer finished...</p>
    )}
  </div>
);

const mapStateToProps = state => ({
  isTimerRunning: state.cice.isTimerRunning,
  timerIsFinished: state.cice.timerIsFinished
});

const mapDispatchToProps = dispatch => ({
  startCrono: () => dispatch(startAsyncTimer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerComponent);
