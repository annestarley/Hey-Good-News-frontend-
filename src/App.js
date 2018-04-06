import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import IntroPage from './components/intro/IntroPage'
import Header from './components/header/Header'
import TopNews from './components/news/TopNews'
import SignupTab from './components/signup/SignupTab'
import AdditionalNews from './components/additionalNews/AdditionalNews'
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={IntroPage} />
          <Route path="/top-news" render={() => {
            return (
              <div>
                <Header />
                <h1 className="news-header">Top News</h1>
                {/* <div className="top-news"> */}
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
                {/* </div> */}
                <Footer />
              </div>
            )
          }}/>
          <Route path="/science" render={() => {
            return (
              <div>
                <Header />
                <h1 className="news-header">Top Science News</h1>
                <AdditionalNews />
                <Footer />
              </div>
            )
          }}/>
          <Route path="/sports" render={() => {
            return (
              <div>
                <Header />
                <h1 className="news-header">Top Sports News</h1>
                <AdditionalNews />
                <Footer />
              </div>
            )
          }}/>
          <Route path="/business" render={() => {
            return (
              <div>
                <Header />
                <h1 className="news-header">Top Business News</h1>
                <AdditionalNews />
                <Footer />
              </div>
            )
          }}/>
          <Route path="/entertainment" render={() => {
            return (
              <div>
                <Header />
                <h1 className="news-header">Top Entertainment News</h1>
                <AdditionalNews />
                <Footer />
              </div>
            )
          }}/>
          <Route path="/health" render={() => {
            return (
              <div>
                <Header />
                <h1 className="news-header">Top Health News</h1>
                <AdditionalNews />
                <Footer />
              </div>
            )
          }}/>
          <Route path="/Technology" render={() => {
            return (
              <div>
                <Header />
                <h1 className="news-header">Top Technology News</h1>
                <AdditionalNews />
                <Footer />
              </div>
            )
          }}/>
          {/* <Header />
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <Route path="/top-news" render={() => {
                return (
                  <div>
                    <TopNews articles={this.state.articles}/>
                  </div>
                )
              }}/>
              <Route path="/science" render={() => {
                return <TopNews articles={this.state.articles}/>
              }}/>
            </div>
            <div className="col-md-4 col-sm-12">

            </div>
          </div>
          <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
