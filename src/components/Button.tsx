import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) =>
  <Container>{text}</Container>;

const Container = styled.div`
  width: 100%;
`;

export default Button;
