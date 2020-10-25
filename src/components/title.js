import React from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  color: #7df9ff;
  text-decoration: underline;
  text-align: center;
  padding: 0;
  `;


class Title extends React.Component {
  render() {
    return (
      <div>
      <Name>Kyle Willard</Name>
      <h3>Software Engineer</h3>
      </div>
    )
  }
}

export default Title;
