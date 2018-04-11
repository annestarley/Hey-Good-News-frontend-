
import React from 'react';
import { Tooltip } from 'mdbreact';

class TooltipsPage extends React.Component {
  render(props) {
    console.log('TOOL TIP', this.props.article.source)

    let toolTipContent = `Overall top tones for all ${this.props.article.source} articles: Fear 34% - Total articles posted: 1`
    return (
      <div style={{display: "inline-block"}}>
        <Tooltip
          // className="tooltip"
          placement="top"
          componentClass="p"
          tag="div"
          component="div"
          tooltipContent={toolTipContent}>
            {this.props.article.source}
        </Tooltip>
      </div>
    )
  }
}

export default TooltipsPage
