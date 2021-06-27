/* eslint-disable react/no-danger */
import React from 'react';

declare global {
  interface Window {
    gtag: any;
  }
}

type GTagEvent = {
  action: string;
  params: Record<string, unknown>;
};

export const useGTM = () => {
  const idGTM = process.env.NEXT_PUBLIC_GTM_ID || 'undefined';

  const init = (url: string) => {
    if (window.gtag) {
      window.gtag('config', idGTM, { page_path: url });
    }
  };

  const event = ({ action, params }: GTagEvent) => {
    if (window.gtag) {
      window.gtag('event', action, params);
    }
  };

  return { init, event };
};

export const GTM = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return isProduction ? (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}', {
              page_path: window.location.pathname,
            });
            `,
        }}
      />
    </>
  ) : null;
};
