import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWheather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(wather => wather.main.pressure);
        const humidity = cityData.list.map(wather => wather.main.humidity);
        const { lon, lat } = cityData.city.coord;
       
        //console.log(temps);

        return (
            <tr key={name}>
                <td>
                <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart data={temps} color={"#27ae60"} units="K" />   
                </td>
                <td>
                    <Chart data={pressure} color={"#C91F37"} units="hPa" />   
                </td>
                <td>
                    <Chart data={humidity} color={"#003171"} units="%" />   
                </td>
            </tr>
        )
    }

   
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                 </tr>   
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWheather)}
            </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

// exportamos la funcion mapState y la clasas Wheather List
export default connect(mapStateToProps)(WeatherList);