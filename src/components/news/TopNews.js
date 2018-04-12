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

  resetChosenTone = () => {
    this.setState({
      chosenTone: ''
    })
  }

  render () {
    return (
      <div>
        {console.log(this.state)}
        <div className="sort">
          <h4>Filter the news by emotional tone?</h4>
          <p>Find all news articles with the chosen emotional tone as a top tone.</p>
          <SelectPage
            setChosenTone={this.setChosenTone}
            resetChosenTone={this.resetChosenTone}
          />
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
