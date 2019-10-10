import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { NextPage } from 'next';

const IndexPage: NextPage = () =>
  <>
    <GlobalStyle />
    <App>Test Page</App>
  </>;

export default IndexPage;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #333;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const App = styled.h2`
  color: red;
`;
