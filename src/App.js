import React, { Fragment } from "react";
import Counter from "./Counter";
import Random from "./Random";
import UltimateHolidayList from "./UltimateHolidayList";
import UltimateList from "./UltimateList";
import UltimateMachine from "./UltimateMachine";

const App = () => (
  <Fragment>
    <UltimateList />
    <UltimateHolidayList />
    <UltimateMachine />
    <Counter />
    <Random />
  </Fragment>
);

export default App;
