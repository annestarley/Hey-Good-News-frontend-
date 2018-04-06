import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import IntroPage from './components/intro/IntroPage'
import Header from './components/header/Header'
import TopNews from './components/news/TopNews'
import SignupTab from './components/signup/SignupTab'
import AdditionalNews from './components/news/AdditionalNews'
import Footer from './components/footer/Footer'

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

  topNews() {
    return (
      <div>
        <Header />
        <h1 className="news-header">Top News</h1>
        <div className='row'>
          <div className="col-md-8">
            <div className="top-news">
              <TopNews articles={this.state.articles}/>
            </div>
          </div>
          <div className="col-md-3">
            <SignupTab />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  science() {
    return (
      <div>
        <Header />
        <h1 className="news-header">Top Science News</h1>
        <AdditionalNews category="science"/>
        <Footer />
      </div>
    )
  }

  sports() {
    return (
      <div>
        <Header />
        <h1 className="news-header">Top Sports News</h1>
        <AdditionalNews category="sports"/>
        <Footer />
      </div>
    )
  }

  business() {
    return (
      <div>
        <Header />
        <h1 className="news-header">Top Business News</h1>
        <AdditionalNews category="business"/>
        <Footer />
      </div>
    )
  }

  entertainment () {
    return (
      <div>
        <Header />
        <h1 className="news-header">Top Entertainment News</h1>
        <AdditionalNews category="entertainment"/>
        <Footer />
      </div>
    )
  }

  health () {
    return (
      <div>
        <Header />
        <h1 className="news-header">Top Health News</h1>
        <AdditionalNews category="health"/>
        <Footer />
      </div>
    )
  }

  technology () {
    return (
      <div>
        <Header />
        <h1 className="news-header">Top Technology News</h1>
        <AdditionalNews category="technology"/>
        <Footer />
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={IntroPage} />
          <Route path="/top-news" render={() => {
            return this.topNews()
          }}/>
          <Route path="/science" render={() => {
            return this.science()
          }}/>
          <Route path="/sports" render={() => {
            return this.sports()
          }}/>
          <Route path="/business" render={() => {
            return this.business()
          }}/>
          <Route path="/entertainment" render={() => {
            return this.entertainment()
          }}/>
          <Route path="/health" render={() => {
            return this.health()
          }}/>
          <Route path="/technology" render={() => {
            return this.technology()
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
