import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import TopNews from './components/news/TopNews'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopNews />
      </div>
    )
  }
}

export default App;
