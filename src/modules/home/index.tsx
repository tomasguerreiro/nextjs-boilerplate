import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageWrapper from '../../templates/PageWrapper/Index';

const HomePage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Home | Next.js + TypeScript Example</title>
        <meta
          name="description"
          content="Boilerplate NextJS com configurações JEDI para iniciar um projeto massa"
        />
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
