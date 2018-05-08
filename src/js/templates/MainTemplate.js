import React from 'react';
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

export default class MainTemplate extends React.Component {
  render() {

    const Home = () => <Col sm={9} sm-offset={3} md={10} md-offset={2}><p>Home!</p></Col>;
    const Tournament1 = () => <p>Tornament1</p>;
    const Tournament2 = () => <p>Tornament2</p>;
    const Tournament3 = () => <p>Tornament3</p>;
    const NewTournament = () => <p>New Tournament</p>;
    const T1 = () => <Tournament name="Tournament1" />;
    const T2 = () => <Tournament name="Tournament2" />;
    const T3 = () => <Tournament name="Tournament3" />;
    const Contact = () => <p>Contact!</p>;

    return (
      <div>
        {/* Main NavBar */}
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed btn-lg.round" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#" id="siteHeader">Social Betting</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul id="navbarSelection" className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">Leading Board</a>
                </li>
                <li>
                  <a href="#">Games</a>
                </li>
                <li>
                  <a href="#">General Bet</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a data-toggle="modal" href="#profileModal">Profile</a>
                </li>
                <li>
                  <a href="#">Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {<UpdateProfileModal hrefName="profileModal" />}

      </div>
    );
  }
}