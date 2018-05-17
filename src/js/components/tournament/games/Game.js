import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

export default class Game extends React.Component {

  componentDidMount() {
  }

  render() {

    const tooltipContent = ['uzico: 3 - 3', 'eranizoos: 2 - 2', 'ofrishi: 1 - 1'].map(name => <div>{name}</div>);

    const tooltip = (
      <Tooltip id="tooltip">
        <strong>{tooltipContent}</strong>
      </Tooltip>
    );

    return (
      <div classNameName="row">
        <div className="row-xs row-sm row-md col-lg-2">
          <div className="panel panel-info">
            <div id="gameInfoHeading" className="panel-heading">
              Group A, game 1
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
              France
            </div>
            <div className="panel-body">
              <div className="row">
                <div id="team1WinsBets" className="col-xs-5 col-sm-6 col-md-3 col-lg-3">
                  <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <span id="tieSpan" className="badge">
                      (3) Bets for a win
                </span>
                  </OverlayTrigger>
                </div>
                <div className="hidden-xs hidden-1 col-md-3 col-lg-3"></div>
                <div id="team1CurrentResult" className="col-xs-3 col-sm-1 col-md-2 col-lg-4">
                  <span className="label label-success label-as-badge pull-right">3</span>
                </div>
                <div className="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                  <input input-type="game" id="team1Input" type="text" className="form-control" autoComplete="off" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-xs row-sm row-md col-lg-5">
          <div className="panel panel-primary">
            <div className="panel-heading" id="team2Heading" style={{ 'textAlign': 'right' }} >
              Italy
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                  <input input-type="game" id="team2Input" type="text" className="form-control" autoComplete="off" />
                </div>
                <div id="team2CurrentResult" className="col-xs-1 col-sm-1 col-md-4 col-lg-4">
                  '<span className="label label-success label-as-badge pull-left">2</span>
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
}