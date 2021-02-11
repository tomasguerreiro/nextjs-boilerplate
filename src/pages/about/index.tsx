import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import PageWrapper from '../../templates/PageWrapper';

const AboutPage = () => (
  <PageWrapper>
    <Head>
      <title>About | Next.js + TypeScript Example</title>
    </Head>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </PageWrapper>
);

export default AboutPage;
