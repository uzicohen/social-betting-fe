import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import moment from 'moment';


export default class Bet extends React.Component {

  componentDidMount() {
  }

  render() {

    const tooltipContent = ['uzico: 3 - 3', 'eranizoos: 2 - 2', 'ofrishi: 1 - 1'].map(name => <div>{name}</div>);

    const tooltip = (
      <Tooltip id="tooltip">
        <strong>{tooltipContent}</strong>
      </Tooltip>
    );

    const date = this.getLocalDateTime(this.props.data.game.date);
    var dayTime = date.hour();
    const friendlyTime = this.getFriendlyTime(date);

    return (
      <div classNameName="row">
        <div className="row-xs row-sm row-md col-lg-2">
          <div className="panel panel-info">
            <div id="gameInfoHeading" className="panel-heading">
              {this.props.data.game.level}
              <div className="pull-right">
                {friendlyTime}
              </div>
            </div>
            <div id="gameInfoBody" className="panel-body">
              <OverlayTrigger placement="bottom" overlay={tooltip}>
                <span id="tieSpan" className="badge">
                  (3) Bets for a tie
                </span>
              </OverlayTrigger>
            </div>
          </div>
        </div>

        <div className="row-xs row-sm row-md col-lg-5">
          <div className="panel panel-primary">
            <div className="panel-heading" id="team1Heading">
              {this.props.team1.name}
            </div>
            <div className="panel-body">
              <div className="row">
                {/* <div id="team1WinsBets" className="col-xs-5 col-sm-6 col-md-3 col-lg-3">
                  <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <span id="tieSpan" className="badge">
                      (3) Bets for a win
                </span>
                  </OverlayTrigger>
                </div> */}

                <div className="col-xs-4">
                  <img src={this.props.team1.flag} style={{ maxHeight: "50px", maxWidth: "50px", border: "solid" }} />
                </div>

                <div className="col-xs-4">
                  <span className="label label-success label-as-badge">{this.props.data.team1}</span>
                </div>



                {/* <div className="hidden-xs hidden-1 col-md-3 col-lg-3"></div> */}

                <div className="col-xs-4">
                  <input input-type="game" id="team1Input" type="text" className="form-control" autoComplete="off" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-xs row-sm row-md col-lg-5">
          <div className="panel panel-primary">
            <div className="panel-heading" id="team2Heading" style={{ 'textAlign': 'right' }} >
              {this.props.team2.name}
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                  <input input-type="game" id="team2Input" type="text" className="form-control" autoComplete="off" />
                </div>
                <div id="team2CurrentResult" className="col-xs-1 col-sm-1 col-md-4 col-lg-4">
                  '<span className="label label-success label-as-badge pull-left">{this.props.data.team2}</span>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-3 col-lg-2"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <span id="tieSpan" className="badge">
                      (4) Bets for a win
                </span>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getLocalDateTime(input) {
    var fmt = 'DD-MM-YYYY HH:mm:ss';
    return moment.utc(input, fmt).local();
  }

  getFriendlyTime(date) {
    return date.format('HH:mm');
  }

}