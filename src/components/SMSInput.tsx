import React from 'react';
import styled from 'styled-components';

interface SMSInputProps {
  maxLength: number;
}

const SMSInput: React.FC<SMSInputProps> = ({ maxLength }) =>
  <Container>{maxLength}</Container>;

const Container = styled.div`
`;

export default SMSInput;
