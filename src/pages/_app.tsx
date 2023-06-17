import type { AppProps, AppType } from 'next/app';
import React, {
  ReactNode,
} from 'react';
import { NextPage } from 'next';
import { trpc } from '@frontend/utils/trpc';

type Page = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: Page;
}

const MyApp: AppType = ({ Component, pageProps }: MyAppProps) => {

  return (
    <div>Hi</div>
  );
};

export default trpc.withTRPC(MyApp);
