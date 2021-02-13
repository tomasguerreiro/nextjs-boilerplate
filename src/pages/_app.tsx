import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../core/styles/globalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
);
export default App;
