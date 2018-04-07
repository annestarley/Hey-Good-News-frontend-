import React, { Component } from 'react';
import { Button, CollapsePage, Card, CardBody, Collapse } from 'mdbreact';

class UserToneCollapse extends Component {
  constructor(props) {
    super(props);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);

    this.state = {
      accordion: false
    };
  }
  onClick1() {
    let state = '';

    if(this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  onClick2() {
    let state = '';

    if(this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }


  render() {
    return (
      <div>
        <Card>
          <div className="card-header" onClick={this.onClick1}><a href="#"><h5>Collapsible Group Item #1</h5></a></div>
          <Collapse isOpen={this.state.accordion === 1}>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
              non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
              moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
              et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
              synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <div className="card-header" onClick={this.onClick2}><a href="#"><h5>Collapsible Group Item #2</h5></a></div>
            <Collapse isOpen={this.state.accordion === 2}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </CardBody>
            </Collapse>
        </Card>

      </div>
    );
  }
}

export default UserToneCollapse
