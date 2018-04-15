import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import IntroPage from './components/intro/IntroPage'
import Header from './components/header/Header'
import TopNews from './components/news/TopNews'
import SignupTab from './components/signup/SignupTab'
import UserTone from './components/userTone/UserTone'
import UserArticle from './components/userArticle/UserArticle'
import AdditionalNews from './components/news/AdditionalNews'
import Footer from './components/footer/Footer'
import FooterPage from './components/footer/FooterPage'

import NavbarFeatures from './components/header/Navbar'

const backendURL = 'http://localhost:8000'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      searchParameter: '',
    }
  }

  componentDidMount = () => {
    this.getTopArticles()
  }

  getTopArticles = () => {
    axios.get(`${backendURL}/top-articles`)
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  setSearchParameter = (e) => {
    let searchParameter = e.target.value
    this.setState({
      searchParameter: searchParameter
    })
  }

  topNews = () => {
    return (
      <div>
        <Header setSearchParameter={this.setSearchParameter}/>
        <div className="top-navbar">
          <NavbarFeatures setSearchParameter={this.setSearchParameter} active="home"/>
        </div>
        <div className='row hey-good-news'>
          <div className="col-md-8">
            <div className="top-news">
              <h1 className="news-header">Top News</h1>
              <TopNews articles={this.state.articles} searchParameter={this.state.searchParameter}/>
            </div>
          </div>
          <div className="col-md-3">
            <SignupTab />
            <UserArticle />
            <UserTone />
          </div>
        </div>
        <FooterPage />
      </div>
    )
  }

  science = () => {
    return (
      <div>
        <Header setSearchParameter={this.setSearchParameter}/>
        <div className="top-navbar">
          <NavbarFeatures setSearchParameter={this.setSearchParameter} active="science"/>
        </div>
        <h1 className="news-header">Top Science News</h1>
        <AdditionalNews category="science" searchParameter={this.state.searchParameter} />
        <FooterPage />
      </div>
    )
  }

  sports = () => {
    return (
      <div>
        <Header setSearchParameter={this.setSearchParameter}/>
        <div className="top-navbar">
          <NavbarFeatures setSearchParameter={this.setSearchParameter} active="sports"/>
        </div>
        <h1 className="news-header">Top Sports News</h1>
        <AdditionalNews category="sports" searchParameter={this.state.searchParameter} />
        <FooterPage />
      </div>
    )
  }

  business = () => {
    return (
      <div>
        <Header setSearchParameter={this.setSearchParameter}/>
        <div className="top-navbar">
          <NavbarFeatures setSearchParameter={this.setSearchParameter} active="business"/>
        </div>
        <h1 className="news-header">Top Business News</h1>
        <AdditionalNews category="business" searchParameter={this.state.searchParameter} />
        <FooterPage />
      </div>
    )
  }

  entertainment = () => {
    return (
      <div>
        <Header setSearchParameter={this.setSearchParameter}/>
        <div className="top-navbar">
          <NavbarFeatures setSearchParameter={this.setSearchParameter} active="entertainment"/>
        </div>
        <h1 className="news-header">Top Entertainment News</h1>
        <AdditionalNews category="entertainment" searchParameter={this.state.searchParameter} />
        <FooterPage />
      </div>
    )
  }

  health = () => {
    return (
      <div>
        <Header setSearchParameter={this.setSearchParameter}/>
        <div className="top-navbar">
          <NavbarFeatures setSearchParameter={this.setSearchParameter} active="health"/>
        </div>
        <h1 className="news-header">Top Health News</h1>
        <AdditionalNews category="health" searchParameter={this.state.searchParameter} />
        <FooterPage />
      </div>
    )
  }

  technology = () => {
    return (
      <div>
        <Header setSearchParameter={this.setSearchParameter}/>
        <div className="top-navbar">
          <NavbarFeatures setSearchParameter={this.setSearchParameter} active='technology'/>
        </div>
        <h1 className="news-header">Top Technology News</h1>
        <AdditionalNews category="technology" searchParameter={this.state.searchParameter} />
        <FooterPage />
      </div>
    )
  }

  render() {
    return (
      <div className="hey-good-news">
        <BrowserRouter>
          <div>
            {/* <Route exact path="/" component={IntroPage} /> */}
            <Route exact path="/" render={() => {
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
      </div>
    )
  }
}

export default App;
