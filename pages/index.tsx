import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NextPage } from 'next';
import { SendSMSCard } from '../src/modules';

const IndexPage: NextPage = () =>
  <>
    <GlobalStyle />
    <SendSMSCard />
  </>;

export default IndexPage;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #333;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;
