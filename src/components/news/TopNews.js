import React from 'react';
import ArticleList from './ArticleList'
import SignupTab from '../signup/SignupTab'
import SelectPage from './DropdownTone'

import TempArticleList from './TempArticleList'

class TopNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenTone: ''
    }
  }

  setChosenTone = (tone) => {
    this.setState({
      chosenTone: tone
    })
  }

  render () {
    return (
      <div>
        <div className="sort">
          <h4>Filter the news by tone?</h4>
          <p>Find all news articles with the chosen tone as a top tone.</p>
          <SelectPage setChosenTone={this.setChosenTone}/>
        </div>
        <ArticleList
          articles={this.props.articles}
          searchParameter={this.props.searchParameter}
          chosenTone={this.state.chosenTone}
        />
        {/* <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} />
        <TempArticleList searchParameter={props.searchParameter} /> */}
      </div>
    )
  }
}

export default TopNews
