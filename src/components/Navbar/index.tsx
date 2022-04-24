import React from 'react';
import styles from './Navbar.module.less'
import {cityGeoCodes} from '../../utils/api'

type props = {
  city: string;
  handleClick: (city: string) => void 
}
class Navbar extends React.Component<props> {

  render(){
    return (
      <nav className={styles.Navbar}>
        {Object.keys(cityGeoCodes).map(key => {
	  const cityName = cityGeoCodes[key].city.toLowerCase()
	  const selected = this.props.city === cityName
	  return (
	    <h2 
	      key={cityName}
	      className={selected ? styles.selected : styles.city}
	      onClick={() => !selected && this.props.handleClick(cityName)}
	    >{cityName}</h2>
	  )
	})}
      </nav>
    )
  }
}

export default Navbar
