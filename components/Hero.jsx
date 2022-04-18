import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Form from '../components/Form'

const Hero = () => {
  return (
      <div className={styles.hero}>
          <div className={styles.heroText}>
              <div className={styles.heroTextTitle}>N&apos;ACHETEZ QUE DES LEADS DE QUALITÉ</div >
              <div className={styles.heroTextSubTitle}>Notre Intelligence Artificielle déniche pour vous les meilleurs leads grâce à notre algorithme de scoring</div >
              <div className={styles.emailPart}>
                  <Form />
              </div>
          </div>


          <div className={styles.heroImage}>
              <Image src="/computer.svg" alt="computer" width={2000} height={2000} objectFit='contain' />
          </div>
      </div>
  )
}

export default Hero