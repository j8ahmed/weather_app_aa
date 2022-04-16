import React from 'react';

const degree = "\u00B0";

// Replace this with API data that will come from the props
// Map all the values (Treat the date that matches today as special and give it different styling.
// Use classnames library to reduce code and map all cards with conditional classes. This will allow
// me to not have to manually code the conditional class for the main weather tile and the extra weather tiles
const weatherNextDays = [
  {day: "Sunday", weather: "cloudy", temp: 19},
  {day: "Monday", weather: "rainy", temp: 20},
  {day: "Tuesday", weather: "sunny", temp: 30},
  {day: "Wednesday", weather: "cloudy", temp: 15},
  {day: "Thursday", weather: "snowy", temp: 0},
]

class Main extends React.Component {

  render(){

    return (
      <main>
        <div className="today-w-cont">
	  <h2>Today</h2>
          <div className="info-w-cont">
            <div className="icon-cont">
	      <img src="" alt="weather icon"/>
	    </div>
            <div className="text-cont">
	      <h3>19{degree}</h3>
	      <h4>Clouds</h4>
	    </div>

	  </div>
	</div>
        <ul className="weather-cards-cont">
	{weatherNextDays.map( (day, i) => (
	  <li key={i} className={day.day === "Monday" ? "today-w-cont" : "extra-w-cont"}>
	    <h3>{day.day}</h3>
            <div className="icon-cont">
	      <img src="" alt="weather icon"/>
	    </div>
            <div className="text-cont">
	      <h3>{day.temp + degree}</h3>
	      <h4>{day.weather}</h4>
	    </div>
	  </li>
	))}
	</ul>
      </main>
    )
  }
}

export default Main
