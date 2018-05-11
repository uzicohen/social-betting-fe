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
        {<Game></Game>}
        {<Game></Game>}
        {<Game></Game>}
        {<Game></Game>}
        {<Game></Game>}
        {<Game></Game>}
      </div>
    );
  }
}