import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Script from 'next/script'




const Home: NextPage = () => {
  const GID : string = process.env.GID
  const url : string = `https://www.googletagmanager.com/gtag/js?id=${GID}`

  return (
    <div>
      <Head>
        <title>Overa Landing Page</title>
        <meta name="Overa Landing Page" content="This page is the landing page of Overa" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Script
        src={url}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GID});
        `}
      </Script>
      
      <div className={styles.container}>
        <Header/>
        <Hero/>
      </div>
      <Card/>
      <Footer/>
    </div>

  )
}

export default Home
