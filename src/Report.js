import React, { Fragment, useEffect, useState } from "react";
import { weatherData } from "./weatherData";

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
    <section>
      <h1>
        Your weather report in {scale.charAt(0).toUpperCase() + scale.slice(1)}
      </h1>
      <dl>
        {data.map(dataPoint => (
          <Fragment key={dataPoint.city}>
            <dt>{dataPoint.city}</dt>
            <dd>{dataPoint.temp}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
};

export default Report;
