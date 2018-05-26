import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Bet from './Bet';

export default class Bets extends React.Component {
  render() {

    var daysMap = {};
    this.props.bets.forEach(bet => {
      var date = bet.game.date.substring(0, 5);
      var team1 = this.props.teams[bet.game.team1_id];
      var team2 = this.props.teams[bet.game.team2_id];
      const currentBet = <Bet key={bet.id} data={bet} team1={team1} team2={team2} />
      if (!daysMap[date]) {
        daysMap[date] = [currentBet];
      } else {
        daysMap[date].push(currentBet);
      }
    });

    var navItems = [];
    var navContent = [];
    for (var key in daysMap) {
      navItems.push(
        <li className="nav-item">
          <a className="nav-link active" id={'home-' + key} data-toggle="tab" href={'#' + key} role="tab" aria-controls={key} aria-selected="true">{key}</a>
        </li>
      );
      navContent.push(<div className="tab-pane fade show active" id={key} role="tabpanel" aria-labelledby={key + "-tab"}>{daysMap[key]}</div>);
    }



    return (
      <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          {navItems}
        </ul>
        <div class="tab-content" id="bets-content">
          {navContent}
        </div>
      </div>
    );
  }
}