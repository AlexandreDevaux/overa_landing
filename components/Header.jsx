import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Form from '../components/Form'

const Header = () => {
  return (
      <div className={styles.headline}>
          <div className={styles.logoPart}>
              <div className={styles.logo}>
                  <Image src="/logo_overa_1000.png" alt="Overa Logo" width="300" height="300" objectFit='contain' />
              </div>
              <div className={styles.overa}>OVERA</div>
          </div>
      </div>
  )
}

export default Header