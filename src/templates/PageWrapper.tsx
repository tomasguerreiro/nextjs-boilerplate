import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Container from 'simple-design-react/lib/components/Container';
import Header from './Header';
import Footer from './Footer';
import { PageWrapperStyled } from './styled';
import { useAppLocal } from '../core/context/AppLocalProvider';
import { useGTM } from '../core/analytics/GTM';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { cookie } = useAppLocal();
  const router = useRouter();
  const gtm = useGTM();

  useEffect(() => {
    if (cookie.isAcceptedPolicies) {
      gtm.init(router.pathname);
    }
  }, [router.pathname, cookie.isAcceptedPolicies]);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Hello</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageWrapperStyled id="page-wrapper">
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </PageWrapperStyled>
    </>
  );
};

export default PageWrapper;
