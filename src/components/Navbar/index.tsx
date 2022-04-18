import React from 'react';
import styles from './Navbar.module.less'

class Navbar extends React.Component {

  render(){
    return (
      <nav className={styles.Navbar}>
        <h2 className={styles.city}>Toronto</h2>
        <h2 className={styles.city}>London</h2>
        <h2 className={styles.city}>Tokyo</h2>
      </nav>
    )
  }
}

export default Navbar
