import React from 'react';

import { Row } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import Tournament from './Tournament';
import UpdateProfileModal from '../modals/UpdateProfileModal';

export default class LeadingBoard extends React.Component {
  render() {
    return (
      <div>

        <div className="row">
          <h1 className="page-header pull-left">Leading Board</h1>
        </div>

        <div className="row">
          <div className="col-xs-1"></div>

          <div className="col-xs-10">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Nick Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody id="ranking-placeholder">
                </tbody>
              </table>
            </div>

            <div className="col-xs-1" />
          </div>
        </div>
      </div >
    );
  }
}