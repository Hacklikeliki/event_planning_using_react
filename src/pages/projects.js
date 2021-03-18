import React, { Component } from 'react';
import SwiftSlider from 'react-swift-slider'

class services extends Component {
  render() {
    const data =  [
      {'id':'1','src':'/images/Rama.jpg'},
      {'id':'2','src':'/images/engagement.jpg'},
      {'id':'3','src':'/images/ganesh.jpg'},
      {'id':'4','src':'/images/house.jpg'},
      {'id':'5','src':'/images/mahndi.jpg'},
      {'id':'6','src':'/images/green.jpg'},
      {'id':'7','src':'/images/ganesh.jpg'},
      {'id':'8','src':'/images/wedding.jpg'}
    ];

    return (
      <SwiftSlider data={data} height={620} />
    );
  }
}

export default services;