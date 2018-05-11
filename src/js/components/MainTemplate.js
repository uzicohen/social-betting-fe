import React from 'react';
import BrowserHistory from 'react-history';
import { Icon } from 'react-icons-kit';
import { iosFootballOutline } from 'react-icons-kit/ionicons/iosFootballOutline';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import Tournament from './tournament/Tournament';
import UpdateProfileModal from '../modals/UpdateProfileModal';
import NewTournamentForm from '../forms/NewTournamentForm';

export default class MainTemplate extends React.Component {
  render() {

    // Create mock JSON array of tournaments
    const tournaments = [1, 2, 3].map(idx => {
      var dict = {};
      dict['id'] = idx;
      dict['name'] = 'Tournament' + idx;
      dict['link'] = '/torurnament' + idx;
      return dict;
    });

    const tournamentItems = tournaments.map((tour) => {
      const a = <Tournament key={tour.id} pathTo={tour.link} name={tour.name} />;
      return a;
    }
    );

    const links = tournaments.map(tour =>
      <li role="presentation">
        <Link role="menuitem" to={tour.link}>{tour.name}</Link>
      </li>
    );

    const tournamentRoutes = [1, 2, 3].map((idx) => <Route path={tournaments[idx - 1].link} exact component={() => tournamentItems[idx - 1]} />);

    const hasTournaments = false;
    const linkToFirstTournament = "/torurnament1";
    const linkToNewTornament = "/new-tournament";

    return (
      <Router history={BrowserHistory}>
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
                <div style={{ color: 'white', display: 'inline-block', marginLeft: '12px' }} className="pull-left">
                  <Icon size={48} icon={iosFootballOutline} />
                </div>
                {hasTournaments ?
                  <Link className="navbar-brand" to={linkToFirstTournament}>Social Betting</Link>
                  : <Link className="navbar-brand" to={linkToNewTornament}>Social Betting</Link>}
              </div>
              <div id="mainNav" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">

                  <li class="dropdown">
                    <a id="drop4" role="button" data-toggle="dropdown" href="#">My Tournaments <b class="caret"></b></a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="drop4">
                      {links}
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
              <Route path={linkToNewTornament} exact component={NewTournamentForm} />

                {tournamentRoutes}
              </Switch>
            </div>
          </div>

        </div>
      </Router>
    );
  }
}