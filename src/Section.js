import React, { useEffect, useRef } from "react";
import Helmet from "react-helmet";

const Section = ({ children, headingText, headingLevel = 2 }) => {
  const H = `h${headingLevel}`;
  const headingRef = useRef(null);
  useEffect(() => {
    headingRef.current.focus();
  }, []);
  return (
    <section>
      <Helmet>
        <title>{`${headingText} | Ultimate Weather Report`}</title>
      </Helmet>
      <H ref={headingRef} tabIndex="-1" style={{ outline: "none" }}>
        {headingText}
      </H>
      {children}
    </section>
  );
};

export default Section;
