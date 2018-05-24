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
import Tournament from './components/tournament/Tournament'
import UpdateProfileModal from './modals/UpdateProfileModal';
import NewTournamentForm from './forms/NewTournamentForm';

import axios from 'axios';
import auth from './api/auth';

export default class SignedInSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentUser: this.props.currentUser, tournaments: [] };
    this.signOut = this.signOut.bind(this);
  }


  signOut() {
    auth.removeJwtToken();
    this.props.setGlobalSignedIn(false);
  };

  setCurrentUser() {
    this.setState({
      currentUser: { "id": 1, "username": "uzicohen9@gmail.com", "nickname": "uzinio", "accountNonExpired": true, "accountNonLocked": true, "credentialsNonExpired": true, "authorities": [{ "authority": "admin" }] }
    });

    // axios({
    //   method: 'get',
    //   url: '/api/users/me',
    //   headers: auth.createAuthorizationTokenHeader(),
    //   data: {}
    // }).then(response => {
    //   this.setState({ currentUser: response.data });
    // }).catch(error => {
    //   this.setState({ signedIn: false });
    // });
  }

  getAllTournaments() {
    this.setState({
      tournaments: [{ "id": 5, "createdBy": { "id": 1, "username": "uzicohen9@gmail.com", "nickname": "uzinio", "accountNonExpired": true, "accountNonLocked": true, "credentialsNonExpired": true, "authorities": [{ "authority": "admin" }] }, "name": "Belgrad 2020 - World cup", "dateCreated": "2018-05-24T07:11:13.822+0000", "competition": { "id": 3, "name": "World cup 2018", "photoUrl": "someurl", "description": "Soccer world cup in Russia" }, "bets": [{ "id": 28, "game": { "id": 20, "team1": { "id": 12, "name": "Italy", "photoUrl": "http://someurl", "description": "Italy's national team" }, "team2": { "id": 13, "name": "France", "photoUrl": "http://someurl", "description": "France's national team" }, "date": "2018-06-21T07:00:00.000+0000" }, "team1": 1, "team2": 0, "date": "2018-05-24T07:11:14.021+0000" }, { "id": 29, "game": { "id": 21, "team1": { "id": 14, "name": "Germany", "photoUrl": "http://someurl", "description": "Germany's national team" }, "team2": { "id": 15, "name": "England", "photoUrl": "http://someurl", "description": "England's national team" }, "date": "2018-06-22T07:00:00.000+0000" }, "team1": 1, "team2": 2, "date": "2018-05-24T07:11:14.029+0000" }, { "id": 30, "game": { "id": 22, "team1": { "id": 12, "name": "Italy", "photoUrl": "http://someurl", "description": "Italy's national team" }, "team2": { "id": 14, "name": "Germany", "photoUrl": "http://someurl", "description": "Germany's national team" }, "date": "2018-06-22T21:00:00.000+0000" }, "team1": 1, "team2": 4, "date": "2018-05-24T07:11:14.035+0000" }, { "id": 31, "game": { "id": 23, "team1": { "id": 13, "name": "France", "photoUrl": "http://someurl", "description": "France's national team" }, "team2": { "id": 15, "name": "England", "photoUrl": "http://someurl", "description": "England's national team" }, "date": "2018-06-22T21:00:00.000+0000" }, "team1": 3, "team2": 3, "date": "2018-05-24T07:11:14.039+0000" }] }, { "id": 6, "createdBy": { "id": 1, "username": "uzicohen9@gmail.com", "nickname": "uzinio", "accountNonExpired": true, "accountNonLocked": true, "credentialsNonExpired": true, "authorities": [{ "authority": "admin" }] }, "name": "Belgrad 2020 - NBA", "dateCreated": "2018-05-24T07:11:13.829+0000", "competition": { "id": 4, "name": "NBA playoffs 2018", "photoUrl": "someurl", "description": "National Basketball association playoffs of 2018" }, "bets": [] }]
    });

    // axios({
    //   method: 'get',
    //   url: '/api/tournaments',
    //   headers: auth.createAuthorizationTokenHeader(),
    //   data: {}
    // }).then(response => {
    //   this.setState({ tournaments: response.data });
    //   console.log(response);
    // }).catch(error => {
    //   console.log(error);
    // });
  }



  componentDidMount() {
    if (!this.state.currentUser.nickname) {
      this.setCurrentUser();
    }

    this.getAllTournaments();

  }


  render() {
    const tournamentItems = {};
    for (var i = 0; i < this.state.tournaments.length; i++) {
      var tour = this.state.tournaments[i];
      tournamentItems[tour.id] = <Tournament key={tour.id} pathTo={"/tournament" + tour.id} name={tour.name} bets={tour.bets} />;
    }

    const links = this.state.tournaments.map(tour =>
      <li role="presentation">
        <Link role="menuitem" to={"/tournament" + tour.id} key={tour.id}>{tour.name}</Link>
      </li>
    );

    const tournamentRoutes = this.state.tournaments.map((tour) => <Route key={tour.id} path={"/tournament" + tour.id} exact component={() => tournamentItems[tour.id]} />);

    const hasTournaments = this.state.tournaments.length > 0;
    const linkToFirstTournament = hasTournaments ? "/torurnament" + this.state.tournaments[0].id : '';
    const linkToNewTournament = "/new-tournament";

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
                  : <Link className="navbar-brand" to={linkToNewTournament}>Social Betting</Link>}
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
                    <Link to={linkToNewTournament}>New Tournament</Link>
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


                  <li class="dropdown">
                    <a id="user" role="button" data-toggle="dropdown" href="#">{this.state.currentUser.nickname} <b class="caret"></b></a>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="user">
                      <li>
                        <a data-toggle="modal" href="#profileModal">Profile</a>
                      </li>
                      <li>
                        <a onClick={() => this.signOut()}>Sign Out</a>
                      </li>
                    </ul>
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
                <Route path={linkToNewTournament} exact component={NewTournamentForm} />
                {tournamentRoutes}
              </Switch>
            </div>
          </div>

        </div>
      </Router>
    );
  }
}