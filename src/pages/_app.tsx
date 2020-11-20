import { AppProps } from 'next/app'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Beers Explorer</title>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="The best beers in the world!" />
      </Head>
      <NextSeo
        title="Beers Explorer"
        description="The best beers in the world!"
        canonical="https://beers-explorer.vercel.app/"
        openGraph={{
          url: 'https://beers-explorer.vercel.app/',
          title: 'Beers Explorer',
          description: 'The best beers in the world!',
          images: [
            {
              url:
                'https://res.cloudinary.com/morpa/image/upload/v1605887249/MyFiles/ico_rck6vr.png'
            }
          ],
          site_name: 'Beers Explorer',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@MorpaDre',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyles />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
