import type { AppProps } from "next/app";
import AppBar from "@components/Appbar";
import Head from "next/head";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const baseURL = process.env.NEXT_PUBLIC_SERVICE_URL;

const client = new ApolloClient({
  uri: `${baseURL}/graphql`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppBar>
        <Head>
          <title>DRE Portfolio</title>
          <meta name="description" content="David Rodriguez Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </AppBar>
    </ApolloProvider>
  );
}

export default MyApp;
