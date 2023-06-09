import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SuncelContext } from "@suncel/nextjs";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { suncelContextConfig } from "@/suncel/suncelContextConfig";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <SuncelContext {...suncelContextConfig}>{getLayout(<Component {...pageProps} />)}</SuncelContext>;
}

export default MyApp;
