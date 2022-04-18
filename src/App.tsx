import React from 'react';
import {Navbar, Main} from './components'
import styles from './App.module.less'

class App extends React.Component {

  render(){
    return (
      <main className={styles.app}>
        <Navbar />
        <Main />
      </main>
    )
  }
}

export default App
