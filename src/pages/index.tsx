import Link from 'next/link';
import PageWrapper from '../templates/PageWrapper';

const IndexPage = () => (
  <PageWrapper title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js🧨</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </PageWrapper>
);

export default IndexPage;
