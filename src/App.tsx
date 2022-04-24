import React from 'react';
import {Navbar, Main} from './components'
import styles from './App.module.less'
import {getWeatherData, getRelevantData} from './utils/api'

type stateType = {
  city: string;
  weather?: ReturnType<typeof getRelevantData> | null
};

class App extends React.Component<{},stateType> {

  constructor(props: {}){
    super(props)
    this.state = {
      city: "toronto",
      weather: null
    }
    this.updateCity = this.updateCity.bind(this)
  }

  updateCity(city: string){
    getWeatherData(city).then((data) => {
	if(data && data.city)
  	  this.setState({
  	    city: data.city || "",
  	    weather: data
  	  });
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // Get the default city -> Toronto
    this.updateCity("toronto")
  }

  render(){
    return (
      <main className={styles.app}>
        <Navbar city={this.state.city} handleClick={this.updateCity}/>
        {this.state.weather && <Main weather={this.state.weather || null}/>}
      </main>
    )
  }
}

export default App
