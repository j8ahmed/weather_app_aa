import React from 'react';
import styles from './Main.module.less'
import {getRelevantData, getDateNoTime, getDayOfWeek, getWeatherIcon} from '../../utils/api'

type props = {
  readonly weather: ReturnType<typeof getRelevantData> | null
}

class Main extends React.Component<props> {

  render(){
    if(!this.props.weather || 
       !this.props.weather.days){
      return "No data loaded yet"
    } 

    const days = this.props.weather.days.slice(0, 5)
    const degree = "\u00B0";

    return (
      <ul className={styles.Main}>
	{days.map( (day, i) => {

	   const weatherIcon = getWeatherIcon(day.weather.main)
	   const currentDay = getDateNoTime(new Date()) === getDateNoTime(day.date) ? true : false;

	   return (

	     <li key={i} className={currentDay ? styles.today : styles.nextDays}>
	       <h3 className={styles.date}>{currentDay ? "Today" : getDayOfWeek(day.date.getDay()).slice(0,3)}</h3>
               <div className={styles.iconCont}>
	         <i className={weatherIcon}></i>
	       </div>
               <div className={styles.textCont}>
	         <h3 className={styles.temp}>{Math.round(day.temp) + degree}</h3>
	         {currentDay && <h4>{day.weather.main}</h4>}
	       </div>
	     </li>

	   )})}
      </ul>
    )
  }
}

export default Main
