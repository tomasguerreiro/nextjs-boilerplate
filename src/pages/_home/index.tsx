import React from 'react';
import { Head } from 'next/document';
import Link from 'next/link';
import PageWrapper from '../../templates/PageWrapper';

const HomePage = () => {
  return (
    <PageWrapper>
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
};

export default HomePage;
