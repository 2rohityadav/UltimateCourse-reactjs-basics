/** @jsx jsx */
import { jsx } from '@emotion/core';
import css from '@emotion/css/macro';
import styled from '@emotion/styled';
import { useEffect, useRef } from "react";
import Helmet from "react-helmet";
import { appWidth } from './styles/globals';
const StyledSection = styled.section`
position:relative;
text-align:center;
padding-top: 3em;
`;
const HeaderH1 = styled.h1`
  display:flex; 
  justify-content: center;
  color: blue;
`;
const HeaderH2 = styled.h2`
  display:flex; 
  justify-content: center;
  color: red;
`;
const HeaderImg = styled.img`
  margin-right 0.5em;
  background-image: url(${props => {return props.showImage ? 'true' : 'false'}})
`;

const mainStyle = css`
  ${appWidth}
  min-height: 40em;
  padding-top: 2em;
  padding-bottom: 2em;
  outline: 0;

  .emotion-heading {
    font-family: 'cornerstone', sans-serif;
    padding: 1rem 0 2rem;
    color: #313030;
    font-size: 1.8em;
    outline: 0;
    text-align: center;
    color: red;
  }
`;

const Section = ({ children, headingText, headingLevel = 2 }) => {
  const H = `h${headingLevel}`;
  const headingRef = useRef(null);
  useEffect(() => {
    headingRef.current.focus();
  }, []);
  return (
    <StyledSection css={[mainStyle]}>
      {/* <Global styles={mainStyle} /> */}
      <Helmet>
        <title>{`${headingText} | Ultimate Weather Report`}</title>
      </Helmet>
      <H className="emotion-heading" ref={headingRef} tabIndex="-1" style={{ outline: "none" }}>
        {headingText}
      </H>
      <HeaderH1 ref={headingRef} tabIndex="-1" style={{ outline: "none" }}>
        {headingText}
      </HeaderH1>
      <HeaderH2 ref={headingRef} tabIndex="-1" style={{ outline: "none" }}>
        {headingText}
      </HeaderH2>
      {children}
    </StyledSection>
  );
};

export default Section;
