import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Sparklines , SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {

  renderWeather(cityData){
    const temps= cityData.list.map( weather => weather.main.temp )
    console.log(temps)
    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <div> 
            <Sparklines data={temps} width={80} height={30}>
              <SparklinesLine color="green" />
            </Sparklines> 
          </div>
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  // ({weather}) === const weather = state.weather
  return { weather } // { weather: weather} === {weather}
}

export default connect(mapStateToProps)(WeatherList);