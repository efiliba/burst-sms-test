import React from 'react';
import styled from 'styled-components';
import { PhoneNumber, SMSInput, Button } from '../../components';

const SendSMSCard: React.FC = () =>
  <Container>
    <PhoneNumber />
    <SMSInput maxLength={100} />
    <Button text="submit" />
  </Container>;

const Container = styled.div`
  height: 10rem;
  width: 10rem;
  outline: solid 1px red;
`;

export default SendSMSCard;
