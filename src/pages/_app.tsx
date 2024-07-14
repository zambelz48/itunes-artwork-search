import type { AppProps } from "next/app"
import Head from "next/head"
import { QueryClient, QueryClientProvider } from "react-query"

import "@/styles/globals.css"

const reactQueryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <>
        <Head>
          <title>Logique Test</title>
        </Head>
        <Component {...pageProps} />
      </>
    </QueryClientProvider>
  )
}
