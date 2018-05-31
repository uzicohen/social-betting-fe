import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { Pager } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Bet from './Bet';
import moment from 'moment';

export default class BetsDay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Pager>
          {
            this.props.hasPrevious &&
            <LinkContainer to={this.props.linkPrevious}>
              <Pager.Item previous href="#">
                &larr; {this.props.textPrevious}
              </Pager.Item>
            </LinkContainer>
          }
          {
            this.props.hasNext &&
            <LinkContainer to={this.props.linkNext}>
              <Pager.Item next href="#">
                {this.props.textNext} &rarr;
            </Pager.Item>
            </LinkContainer>
          }
        </Pager>


        <div className="row">
          <div className="col-xs-4" />
          <div className="col-xs-4" style={{ textAlign: 'center' }}>
            <span className="label label-default">{this.props.title}</span>
          </div>
        </div>

        <div className="row">
          {this.props.bets}
        </div>
      </div >
    );
  }
}