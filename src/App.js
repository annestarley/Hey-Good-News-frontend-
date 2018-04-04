import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/header/Header'
import TopNews from './components/news/TopNews'

class App extends Component {
  backendURL = 'https://localhost:6000'

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
