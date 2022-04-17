import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { hotjar } from 'react-hotjar'
import TagManager from 'react-gtm-module'
import Script from 'next/script'



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(process.env.HJID, process.env.HJSV)
  }, [])
  useEffect(() => {

    if (typeof window !== 'undefined') {
      console.log("init GTM")
      TagManager.initialize({ gtmId: process.env.GTM });
    }else {
      console.log("GTM server side - ignorning")
    }

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
