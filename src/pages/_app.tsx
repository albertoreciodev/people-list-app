import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import "reflect-metadata";
import { initializeServerData } from "@/server-data";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}

// App.getInitialProps = async () => {
//   await initializeServerData();
//   return {};
// };
