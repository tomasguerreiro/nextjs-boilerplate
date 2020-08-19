import Link from 'next/link';
import PageWrapper from '../templates/PageWrapper';

const AboutPage = () => (
  <PageWrapper title="About | Next.js + TypeScript Example">
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
