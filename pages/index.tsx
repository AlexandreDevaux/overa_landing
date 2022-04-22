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
  return (
    <div>
      <Head>
        <title>Overa</title>
        <meta name="Overa Landing Page" content="N'ACHETEZ QUE DES LEADS DE QUALITÉ. Notre Intelligence Artificielle déniche pour vous les meilleurs leads grâce à notre algorithme de scoring." />
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
