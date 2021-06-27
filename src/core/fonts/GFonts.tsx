interface FontProps {
  href: string;
}

let hasLoaded = false;

export const GFonts = ({ href }: FontProps) => {
  const preConnect = !hasLoaded ? true : false;
  hasLoaded = true;

  return (
    <>
      {preConnect && (
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      )}
      <link rel="preload" as="style" href={href} />
      <link rel="stylesheet" href={href} media="all" />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  );
};
