import type { AppProps } from 'next/app'
import AppBar from '@components/Appbar'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppBar>
      <Head>
        <title>DRE Portfolio</title>
        <meta name="description" content="David Rodriguez Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AppBar>
  )
}

export default MyApp
