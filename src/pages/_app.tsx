import React from 'react';
import App from 'next/app';
import { AppProvider } from 'simple-design-react';
import GlobalStyle from '../core/styles/globalStyle';

import customTheme from '../core/styles/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <AppProvider theme="light" customThemeMode={customTheme}>
          <Component {...pageProps} />
        </AppProvider>
      </>
    );
  }
}
