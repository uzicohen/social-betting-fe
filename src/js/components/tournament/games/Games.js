import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import Game from './Game';

export default class Games extends React.Component {
  render() {
    return (
      <div className="row">
        {<Game pathTo={this.props.pathTo} id={1}></Game>}
        {<Game pathTo={this.props.pathTo} id={2}></Game>}
        {<Game pathTo={this.props.pathTo} id={3}></Game>}
        {<Game pathTo={this.props.pathTo} id={4}></Game>}
        {<Game pathTo={this.props.pathTo} id={5}></Game>}
        {<Game pathTo={this.props.pathTo} id={6}></Game>}
      </div>
    );
  }
}