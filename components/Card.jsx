import React from 'react'
import styles from '../styles/Home.module.css'

const Card = () => {
  return (
      <div className={styles.card}>
          <text className={styles.cardTitle}>Prêt à rejoindre notre waitlist ?</text>
          <text className={styles.cardSubTitle}>Faites partie des 300 premiers inscrits sur la liste d&apos;attente !</text>
          <text className={styles.joinButton}>Nous Rejoindre</text>
      </div>
  )
}

export default Card