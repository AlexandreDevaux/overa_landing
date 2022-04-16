import React from 'react'
import styles from '../styles/Home.module.css'

const Card = () => {
  return (
      <div className={styles.card}>
          <div className={styles.cardTitle}>Prêt à rejoindre notre waitlist ?</div>
          <div className={styles.cardSubTitle}>Faites partie des 300 premiers inscrits sur la liste d' attente !</div>
          <div className={styles.joinButton}>Nous Rejoindre</div>
      </div>
  )
}

export default Card