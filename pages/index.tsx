import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Overa Landing Page</title>
        <meta name="Overa Landing Page" content="This page is the landing page of Overa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
