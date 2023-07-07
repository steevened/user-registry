import { ThemeProvider } from '@/components/theme-provider';
import { fetcher } from '@/lib/fetcher';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr/_internal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SWRConfig
        value={{
          fetcher,
          revalidateOnFocus: false,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}
