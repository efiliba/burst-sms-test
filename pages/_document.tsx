import React from 'react';
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/styles';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const muiSheet = new MuiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        // Retrieve styles from components in the page
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });     
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => muiSheet.collect(<App {...props} />)
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {muiSheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal();
    }
  }
}
