import React, { Fragment } from "react";
import Counter from "./Counter";
import Random from "./Random";
import UltimateMachine from "./UltimateMachine";
import UltimateHolidayList from "./UltimateHolidayList";

const App = () => (
  <Fragment>
    <UltimateHolidayList />
    <UltimateMachine />
    <Counter />
    <Random />
  </Fragment>
);

export default App;
