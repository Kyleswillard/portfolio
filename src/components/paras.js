import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  text-align: center:
  color: white;
  width: 60%;
  border: 4px solid #7df9ff;
  padding: 0 1.5rem;
  border-radius: 10% / 50%;

`;
const Header = styled.h3 `
color: wheat;

`

class Intro extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          | Creativity | Drive | Efficiency |
        </Header>
        <p>
          Taking Efficiency, Creativity, and Drive into every project. I love to dive into even the most difficult topics, and fight my way out of it. I thrive on a rapid pace the encompasses software engineering, and absolutely rejoice when I get to present a solid result to people. Making amazing apps for people to use in their daily lives makes it all worthwhile.
        </p>
      </Wrapper>
    )
  }
}

export default Intro;
