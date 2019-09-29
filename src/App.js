import React, { Fragment } from "react";
import Counter from "./Counter";
import Random from "./Random";
import UltimateMachine from "./UltimateMachine";

const App = () => (
  <Fragment>
    <UltimateMachine />
    <Counter />
    <Random />
  </Fragment>
);

export default App;
