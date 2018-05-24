import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import Bet from './Bet';

export default class Bets extends React.Component {
  render() {
    const bets = this.props.data.map(bet => <Bet key={bet.id} data={bet} />);
    return (
      <div className="row">
        {bets}
      </div>
    );
  }
}