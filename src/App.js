import React, { Fragment, useState } from "react";
import Counter from "./Counter";
import Random from "./Random";
import UltimateHolidayList from "./UltimateHolidayList";
import UltimateList from "./UltimateList";
import UltimateMachine from "./UltimateMachine";
import Stopwatch from "./StopWatch";

const App = () => {
  const [show, setShow] = useState(true);
  const onClickHandler = () => {
    setShow(s => !s);
  }
  return (
    <Fragment>
      <Stopwatch />
      <UltimateList />
      <UltimateHolidayList />
      <UltimateMachine />
      {show && <Counter />}
      <button type="button" onClick={onClickHandler} aria-pressed={!show}>
        Unmount Counter
      </button>
      <Random />
    </Fragment>
  )
};

export default App;
