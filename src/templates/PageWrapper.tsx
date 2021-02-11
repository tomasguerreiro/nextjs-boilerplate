import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const PageWrapper = ({ children }: Props) => (
  <div id="page-wrapper">
    <Head>
      <title>Hello</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageWrapper;
