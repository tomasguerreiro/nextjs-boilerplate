import React from 'react';
import App from 'next/app';
import { AppProvider } from 'simple-design-react/lib/providers/AppContext';
import GlobalStyle from '../core/styles/globalStyle';
import { AppLocalProvider } from '../core/context/AppLocalProvider';
import customTheme from '../core/styles/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppLocalProvider>
        <GlobalStyle />
        <AppProvider theme="light" customThemeMode={customTheme}>
          <Component {...pageProps} />
        </AppProvider>
      </AppLocalProvider>
    );
  }
}
