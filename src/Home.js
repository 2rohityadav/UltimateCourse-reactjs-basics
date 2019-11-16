import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

const Home = () => (
  <Section headingText="Welcome to the weather report" headingLevel="1">
    <p>
      Please select one of the options below to view weather in your temperature
      scale of choice
    </p>
    <nav aria-label="main">
      <ul>
        <li>
          <Link to="/reports/kelvin">View weather in Kelvin</Link>
        </li>
        <li>
          <Link to="/reports/celsius">View weather in Celsius</Link>
        </li>
        <li>
          <Link to="/reports/fahrenheit">View weather in Fahrenheit</Link>
        </li>
      </ul>
    </nav>
  </Section>
);

export default Home;
