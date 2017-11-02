import React, { Component } from 'react';

// importamos nuestros containers
import SearchBar from '../containers/serach_bar';
import WeatherList from '../containers/weather_list' ;


export default class App extends Component {
  render() {
    return (
      <div className="col-md-8 col-md-offeset-2 col-sm-12">
          <SearchBar />
          <WeatherList />
         
      </div> 
    );
  }
}
