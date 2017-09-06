import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FullHeader from 'react-full-header';

class App extends Component {
  render() {
    return (
      <FullHeader
        title="TDD"
        subtitle="What is tested may never beak!"
        bgColor="blue"
        textColor="black"
        bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
      />
    );
  }
}

export default App;
