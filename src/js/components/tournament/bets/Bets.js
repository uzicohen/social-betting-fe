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
    const bets = this.props.bets.map(bet => {
      var team1 = this.props.teams[bet.game.team1_id];
      var team2 = this.props.teams[bet.game.team2_id];
      return <Bet key={bet.id} data={bet} team1={team1} team2={team2} />
    }
    );
    return (
      <div className="row">
        {bets}
      </div>
    );
  }
}