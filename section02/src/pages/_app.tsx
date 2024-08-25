import GlobalLayout from "@/components/global-layout";
import SearchableLayout from "@/components/searchable-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "@/store";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <Provider store={store}>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
    </Provider>
  );
}
