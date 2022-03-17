import styles from '../../styles/Header.module.css'
import React from 'react'

const Header = () => {
  return (
    <div>
      {' '}
      <h1 className={styles.title}>
              <span>webDev </span>News
              <p className={styles.description}>keep up to date with the latest web development news</p>
      </h1>
     
    </div>
  )
}

export default Header
