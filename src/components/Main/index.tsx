import React from 'react';
import styles from './Main.module.less'

const degree = "\u00B0";

// Replace this with API data that will come from the props
// Map all the values (Treat the date that matches today as special and give it different styling.
// Use classnames library to reduce code and map all cards with conditional classes. This will allow
// me to not have to manually code the conditional class for the main weather tile and the extra weather tiles
const weatherNextDays = [
  {day: "Sunday", weather: "clouds", temp: 19},
  {day: "Monday", weather: "rain", temp: 20},
  {day: "Tuesday", weather: "sun", temp: 30},
  {day: "Wednesday", weather: "clouds", temp: 15},
  {day: "Thursday", weather: "snow", temp: 0},
]

class Main extends React.Component {

  render(){

    return (
      <ul className={styles.Main}>
	{weatherNextDays.map( (day, i) => {

	   const currentDay = day.day === "Sunday"
	   return (
	  <li key={i} className={currentDay ? styles.today : styles.nextDays}>
	    <h3 className={styles.date}>{day.day}</h3>
            <div className={styles.iconCont}>
	      <i className="fa-solid fa-cloud"></i>
	    </div>
            <div className={styles.textCont}>
	      <h3 className={styles.temp}>{day.temp + degree}</h3>
	      {currentDay && <h4>{day.weather}</h4>}
	    </div>
	  </li>
	)})}
      </ul>
    )
  }
}

export default Main
