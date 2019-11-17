import React from "react";
import Section from "./Section";

export default class About extends React.Component {
  render() {
    return <Section headingText="About this weather app" headingLevel="1" s>
    <p>
      This application has been built with care and love by your Ultimate Team!
    </p>
  </Section>
  }
};
