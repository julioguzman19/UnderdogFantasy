import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className='background-color'>
        <HomeCarousel />
      </div>
    );
  }
}
