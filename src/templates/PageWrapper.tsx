import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { PageWrapperStyled } from './styled';

type Props = {
  children?: ReactNode;
};

const PageWrapper = ({ children }: Props) => (
  <>
    <Head>
      <title>Hello</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <PageWrapperStyled id="page-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </PageWrapperStyled>
  </>
);

export default PageWrapper;
