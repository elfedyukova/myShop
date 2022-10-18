// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { AppWrapper } from '../contexts/appcontext';

function MyApp({ Component, pageProps }) {
  return (

    <AppWrapper>
      <NextUIProvider>

        <Component {...pageProps} />

      </NextUIProvider>
    </AppWrapper>
  );
}

export default MyApp