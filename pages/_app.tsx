import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as gtag from '../lib/gtag'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { hotjar } from 'react-hotjar'



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
  return <Component {...pageProps} />
}

export default MyApp
