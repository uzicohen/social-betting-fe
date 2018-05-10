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

export default class MainTemplate extends React.Component {
  render() {

    const Home = () => <Col sm={9} sm-offset={3} md={10} md-offset={2}><p>Home!</p></Col>;
    const Tournament1 = () => <Tournament name="Tournament1" />;
    const Tournament2 = () => <Tournament name="Tournament2" />;
    const Tournament3 = () => <Tournament name="Tournament3" />;
    const NewTournament = () => <p>New Tournament</p>;
    const Contact = () => <p>Contact!</p>;

    return (
      <Router>
        <div>
          {/* Main NavBar */}
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false"
                  aria-controls="mainNav">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#" id="siteHeader">Social Betting</a>
              </div>
              <div id="mainNav" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">

                  <li class="dropdown">
                    <a id="drop4" role="button" data-toggle="dropdown" href="#">My Tournaments <b class="caret"></b></a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="drop4">
                      <li role="presentation">
                        <Link role="menuitem" to="/tournament1">Tournament1</Link>
                      </li>
                      <li role="presentation">
                        <Link role="menuitem" to="/tournament2">Tournament2</Link>
                      </li>
                      <li role="presentation">
                        <Link role="menuitem" to="/tournament3">Tournament3</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">New Tournament</a>
                  </li>
                  <li>
                    <a href="#">Join a Tournament</a>
                  </li>
                  <li>
                    <a href="#">Messages</a>
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

          {/* Main Section */}
          <div className="container-fluid" style={{ 'marginTop': '30px' }}>
            <div className="row main-section">
              <Switch>
                <Route path="/tournament1" exact component={Tournament1} />
                <Route path="/tournament2" exact component={Tournament2} />
                <Route path="/tournament3" exact component={Tournament3} />
              </Switch>
            </div>
          </div>

        </div>
      </Router>
    );
  }
}