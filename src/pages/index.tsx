import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import PageWrapper from '../templates/PageWrapper';

const IndexPage = () => (
  <PageWrapper title="Home | Next.js + TypeScript Example">
    <Head>
      <title>Home | Next.js + TypeScript Example</title>
    </Head>
    <h1>Hello Next.js🧨</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </PageWrapper>
);

export default IndexPage;
