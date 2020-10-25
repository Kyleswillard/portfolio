import React from 'react';
import styled from 'styled-components';
import {DiReact, DiSass, DiJavascript1, DiHtml5, DiCss3, DiNodejs, DiMongodb, DiPostgresql} from 'react-icons/di';
import {SiRedux} from 'react-icons/si'

const Wrapper = styled.div`
color: #7df9ff;
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
  font-size: 5rem;
  padding: .5rem;
  `;



class Icons extends React.Component {
  render() {
    return (
      <Wrapper className="icon-row">
        <DiHtml5/>
        <DiCss3/>
        <DiSass/>
        <DiJavascript1/>
        <DiReact/>
        <SiRedux/>
        <DiNodejs/>
        <DiMongodb/>
        <DiPostgresql/>
        </Wrapper>
    )
  }
}

export default Icons;