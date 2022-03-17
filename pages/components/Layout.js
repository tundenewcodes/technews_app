import React from 'react'
import Meta from './Meta'
import Nav from './Nav'
import Header from './Header'
import styles from '../../styles/Layout.module.css'
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Meta/>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header /> {children}{' '}
        </main>{' '}
      </div>{' '}
    </React.Fragment>
  )
}

export default Layout
