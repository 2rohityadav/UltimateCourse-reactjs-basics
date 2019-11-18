import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import Container from "./Container";
import Counter from "./Counter";
import Footer from "./Footer";
import FormContainer from "./Form";
import Home from "./Home";
import Random from "./Random";
import Report from "./Report";
import Stopwatch from "./StopWatch";
import UltimateHolidayList from "./UltimateHolidayList";
import UltimateList from "./UltimateList";
import UltimateMachine from "./UltimateMachine";

export default class App extends React.Component {
  state = {
    show: true
  }
  render(){
    const {show} = this.state;
  const onClickHandler = () => {
    this.setState({show: !this.state.show});
  };
    return <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/reports/:scale" component={Report} />
      <Route path="/container" exact component={Container} />
      <Route path="/form-container" exact component={FormContainer} />
      <Route path="/stop-watch" exact component={Stopwatch} />
      <Route path="/list" exact component={UltimateList} />
      <Route path="/holiday-list" exact component={UltimateHolidayList} />
      <Route path="/machine" exact component={UltimateMachine} />
      <Route path="/counter">
        {show && <Counter />}
        <button type="button" onClick={onClickHandler} aria-pressed={!show}>
          Unmount Counter
        </button>
      </Route>
      <Route path="/random" component={Random} />
      <Footer
        links={[
          { path: "/", name: "Home" },
          { path: "/about", name: "About" },
          { path: "/container", name: "Container" },
          { path: "/form-container", name: "Form Container" },
          { path: "/stop-watch", name: "Stop watch" },
          { path: "/list", name: "List" },
          { path: "/holiday-list", name: "Holiday List" },
          { path: "/machine", name: "Machine" },
          { path: "/counter", name: "Counter" },
          { path: "/random", name: "Random" }
        ]}
      />
    </BrowserRouter>
  }
};

