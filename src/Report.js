import React, { Fragment, useEffect, useState } from "react";
import { weatherData } from "./weatherData";
import Section from "./Section";

const Report = ({ match }) => {
  const { scale } = match.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await weatherData(scale));
    }
    fetchData();
  }, [scale]);

  console.log(scale);

  return (
    <Section
      headingText={`Your weather report in ${scale.charAt(0).toUpperCase() +
        scale.slice(1)}`}
      headingLevel="1"
    >
      <dl>
        {data.map(dataPoint => (
          <Fragment key={dataPoint.city}>
            <dt>{dataPoint.city}</dt>
            <dd>{dataPoint.temp}</dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  );
};

export default Report;
