import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
      <div className={styles.footer}>
          <div className={styles.copyright}>© 2020 Overa</div>
          <div className={styles.footerLinks}>
              <div className={styles.footerLink}>Terms of Service</div>
              <div className={styles.footerLink}>Privacy Policy</div>
              <div className={styles.footerLink}>GPDR Policy</div>
          </div>
      </div>
  )
}

export default Footer