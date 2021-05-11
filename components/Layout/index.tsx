import React from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const Layout = ({ children, title, description }: Props) => {
  const defaultDescription = "Personality test, introvert or extrovert?";
  return (
    <>
      <Head>
        <title>{title} - teamway.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description || defaultDescription} />
        <meta property="og:title" content={`${title} - teamway.io`} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <link
          rel="preload"
          href="/fonts/Goldplay-Bold.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
