import React from 'react';
import styled from 'styled-components';
import {FaGithub,FaLinkedin } from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

const Wrapper = styled.div`
  color:wheat;
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  font-size: 3rem;
  padding: .5rem;
  `;

  const Link = styled.a `
    text-decoration: none;
    padding: .25rem 1.25rem;

    &:link {
      color:white;
    }

    &:active {
      color: white;
    }

    &:visited {
      color: white;
    }
    &:hover {
      color: #7df9ff;
      padding: .5rem;
      border: 1px solid #7df9ff;
      border-radius: 10% / 50%;
      font-weight: bolder;
    }
  `
class Contact extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link href="https://github.com/Kyleswillard"> <FaGithub/>Github </Link>
        <Link href="https://www.linkedin.com/in/kyleswillard/"> <FaLinkedin />LinkedIn </Link>
        <Link href="mailto:kyleswillard@gmail.com"><FiMail/>Email </Link>
      </Wrapper>
    )
  }
}

export default Contact;
