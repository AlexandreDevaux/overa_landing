import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as gtag from '../lib/gtag'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { hotjar } from 'react-hotjar'
import Script from 'next/script'



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any)  => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  
  useEffect(() => {
    hotjar.initialize(process.env.HJID, process.env.HJSV)
  }, [])
  return (
    <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GID}`} />

    <Script id="G-XXXXXX" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
    <Component {...pageProps} />
    
    </>
    
  )
}

export default MyApp
