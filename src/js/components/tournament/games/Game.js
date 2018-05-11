import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

export default class Game extends React.Component {
  render() {
    return (
      <div classNameName="row">
        <div className="row-xs row-sm row-md col-lg-2">
          <div className="panel panel-info">
            <div id="gameInfoHeading" className="panel-heading">
            </div>
            <div id="gameInfoBody" className="panel-body">
              <a id="tieBets" data-html="true" onclick="return false;" data-placement="bottom" href="#" data-toggle="tooltip">
                <span id="tieSpan" className="badge"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="row-xs row-sm row-md col-lg-5">
          <div className="panel panel-primary">
            <div className="panel-heading" id="team1Heading"></div>
            <div className="panel-body">
              <div className="row">
                <div id="team1WinsBets" className="col-xs-5 col-sm-6 col-md-3 col-lg-3">
                  <a id="team1Wins" data-html="true" onclick="return false;" data-placement="right" href="#" data-toggle="tooltip">
                    <span id="team1Span" className="badge"></span>
                  </a>
                </div>
                <div className="hidden-xs hidden-1 col-md-3 col-lg-3"></div>
                <div id="team1CurrentResult" className="col-xs-3 col-sm-1 col-md-2 col-lg-4"></div>
                <div className="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                  <input input-type="game" id="team1Input" type="text" className="form-control" autocomplete="off" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-xs row-sm row-md col-lg-5">
          <div className="panel panel-primary">
            <div className="panel-heading" id="team2Heading" style={{ 'textAlign': 'right' }} />
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                  <input input-type="game" id="team2Input" type="text" className="form-control" autocomplete="off" />
                </div>
                <div id="team2CurrentResult" className="col-xs-1 col-sm-1 col-md-4 col-lg-4"></div>
                <div className="col-xs-1 col-sm-1 col-md-3 col-lg-2"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <a id="team2Wins" data-html="true" onclick="return false;" data-placement="left" href="#" data-toggle="tooltip">
                    <span id="team2Span" className="badge"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}