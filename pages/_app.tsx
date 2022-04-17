import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { hotjar } from 'react-hotjar'
import TagManager from 'react-gtm-module'



function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.GID)
  useEffect(() => {
    hotjar.initialize(process.env.HJID, process.env.HJSV)
  }, [])
  useEffect(() => {

    if (typeof window !== 'undefined') {
      console.log("init GTM")
      TagManager.initialize({ gtmId: 'G-'+ process.env.GID });
    }else {
      console.log("GTM server side - ignorning")
    }

}, [])
  return <Component {...pageProps} />
}

export default MyApp
