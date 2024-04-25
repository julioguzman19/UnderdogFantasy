import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <HomeCarousel />
      </div>
    );
  }
}
