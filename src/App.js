import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/header/Header'
import TopNews from './components/news/TopNews'

const backendURL = 'http://localhost:3000'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getTopArticles()
  }

  getTopArticles() {
    axios.get(`${backendURL}/top-articles`)
      .then(res => {
        console.log(res.data)
        this.setState({
          articles: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

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
