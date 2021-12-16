/* eslint-disable global-require */
import React from 'react';
import App from 'next/app';
import { SimpleDesignProvider } from 'simple-design-react/lib/providers/SimpleDesignProvider';
import GlobalStyle from '../core/styles/globalStyle';
import { AppLocalProvider } from '../core/context/AppLocalProvider';
import customTheme from '../core/styles/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../mocks');
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppLocalProvider>
        <GlobalStyle />
        <SimpleDesignProvider theme="light" customThemeMode={customTheme}>
          <Component {...pageProps} />
        </SimpleDesignProvider>
      </AppLocalProvider>
    );
  }
}
