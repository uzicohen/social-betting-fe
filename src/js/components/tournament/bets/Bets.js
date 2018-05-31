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
import BetsDay from './BetsDay';
import moment from 'moment';

export default class Bets extends React.Component {
  constructor(props) {
    super(props);
    var datesToBetsMap = {};
    var datesArray = [];
    this.props.bets.forEach(bet => {
      var date = this.getLocalDate(bet.game.date);
      var dateKey = this.getDateAsKey(date);
      var team1 = this.props.teams[bet.game.team1_id];
      var team2 = this.props.teams[bet.game.team2_id];
      const currentBet = <Bet key={bet.id} data={bet} team1={team1} team2={team2} />
      if (!datesToBetsMap[dateKey]) {
        datesToBetsMap[dateKey] = [currentBet];
        datesArray.push(date);
      } else {
        datesToBetsMap[dateKey].push(currentBet);
      }
    }
    );

    datesArray.sort(function (left, right) {
      return moment.utc(left.timeStamp).diff(moment.utc(right.timeStamp))
    });

    this.state = {
      betsDayRoutes: this.getBetsDayRoutes(datesArray, datesToBetsMap)
    };
  }


  getDateAsKey(date) {
    var fmt = 'DD-MM-YYYY';
    return date.format(fmt);
  }

  getFriendlyDate(date) {
    return date.format('dddd') + ", " + date.date() + "-" + (date.month() + 1);
  }

  // getLocalDateTime(input) {
  //   var fmt = 'DD-MM-YYYY HH:mm:ss';
  //   return moment.utc(input, fmt).local();
  // }

  getLocalDate(input) {
    var fmt = 'DD-MM-YYYY';
    return moment.utc(input, fmt).local();
  }

  getBetsDayRoutes(datesArray, datesToBetsMap) {
    const betsDayRoutes = [...Array(datesArray.length).keys()].map(idx => {
      let currentDate = datesArray[idx];
      let linkToBetsDay = this.props.pathTo + "/" + this.getDateAsKey(currentDate);
      let props = {
        hasPrevious: (idx > 0),
        hasNext: (idx < datesArray.length - 1),
        linkPrevious: (idx > 0) ? this.props.pathTo + "/" + this.getDateAsKey(datesArray[idx - 1]) : "",
        textPrevious: (idx > 0) ? this.getFriendlyDate(datesArray[idx - 1]) : "",
        linkNext: (idx < datesArray.length - 1) ? this.props.pathTo + "/" + this.getDateAsKey(datesArray[idx + 1]) : "",
        textNext: (idx < datesArray.length - 1) ? this.getFriendlyDate(datesArray[idx + 1]) : "",
        title: this.getFriendlyDate(currentDate),
        bets: datesToBetsMap[this.getDateAsKey(currentDate)]
      };
      return <Route path={linkToBetsDay} exact component={() => <BetsDay {...props} />} />;
    });
    return betsDayRoutes;
  }

  render() {
    var linkToBetsDay = this.props.pathTo + "/14-06-2018";

    return (
      <div>
        <switch>
          {/* <Route path="/" exact component={() => <p>Hello</p>} /> */}
          <Link to={linkToBetsDay}>YYY</Link>
          {this.state.betsDayRoutes}
        </switch>

      </div>
    );
  }
}