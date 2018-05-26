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
    // this.setState({
    //   currentUser: { "id": 1, "username": "uzicohen9@gmail.com", "nickname": "uzinio", "accountNonExpired": true, "accountNonLocked": true, "credentialsNonExpired": true, "authorities": [{ "authority": "admin" }] }
    // });

    axios({
      method: 'get',
      url: '/api/users/me',
      headers: auth.createAuthorizationTokenHeader(),
      data: {}
    }).then(response => {
      this.setState({ currentUser: response.data });
    }).catch(error => {
      this.setState({ signedIn: false });
    });
  }

  getAllTournaments() {
    this.setState({
      teams: {"1":{"id":1,"name":"Russia","fifaCode":"RUS","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/900px-Flag_of_Russia.png"},"2":{"id":2,"name":"Saudi Arabia","fifaCode":"KSA","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/750px-Flag_of_Saudi_Arabia.png"},"3":{"id":3,"name":"Egypt","fifaCode":"EGY","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/900px-Flag_of_Egypt.png"},"4":{"id":4,"name":"Uruguay","fifaCode":"URU","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/900px-Flag_of_Uruguay.png"},"5":{"id":5,"name":"Portugal","fifaCode":"POR","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.png"},"6":{"id":6,"name":"Spain","fifaCode":"ESP","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.png"},"7":{"id":7,"name":"Morocco","fifaCode":"MAR","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/900px-Flag_of_Morocco.png"},"8":{"id":8,"name":"Iran","fifaCode":"IRN","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.png"},"9":{"id":9,"name":"France","fifaCode":"FRA","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.png"},"10":{"id":10,"name":"Australia","fifaCode":"AUS","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.png"},"11":{"id":11,"name":"Peru","fifaCode":"PER","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/900px-Flag_of_Peru_%28state%29.png"},"12":{"id":12,"name":"Denmark","fifaCode":"DEN","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/740px-Flag_of_Denmark.png"},"13":{"id":13,"name":"Argentina","fifaCode":"ARG","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.png"},"14":{"id":14,"name":"Iceland","fifaCode":"ISL","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.png"},"15":{"id":15,"name":"Croatia","fifaCode":"CRO","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/800px-Flag_of_Croatia.png"},"16":{"id":16,"name":"Nigeria","fifaCode":"NGA","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/800px-Flag_of_Nigeria.png"},"17":{"id":17,"name":"Brazil","fifaCode":"BRA","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/720px-Flag_of_Brazil.png"},"18":{"id":18,"name":"Switzerland","fifaCode":"SUI","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/320px-Flag_of_Switzerland_%28Pantone%29.png"},"19":{"id":19,"name":"Costa Rica","fifaCode":"CRC","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/833px-Flag_of_Costa_Rica_%28state%29.png"},"20":{"id":20,"name":"Serbia","fifaCode":"SRB","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1350px-Flag_of_Serbia.png"},"21":{"id":21,"name":"Germany","fifaCode":"GER","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.png"},"22":{"id":22,"name":"Mexico","fifaCode":"MEX","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.png"},"23":{"id":23,"name":"Sweden","fifaCode":"SWE","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.png"},"24":{"id":24,"name":"South Korea","fifaCode":"KOR","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/900px-Flag_of_South_Korea.png"},"25":{"id":25,"name":"Belgium","fifaCode":"BEL","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/450px-Flag_of_Belgium.png"},"26":{"id":26,"name":"Panama","fifaCode":"PAN","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/450px-Flag_of_Panama.png"},"27":{"id":27,"name":"Tunisia","fifaCode":"TUN","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.png"},"28":{"id":28,"name":"England","fifaCode":"ENG","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/800px-Flag_of_England.png"},"29":{"id":29,"name":"Poland","fifaCode":"POL","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.png"},"30":{"id":30,"name":"Senegal","fifaCode":"SEN","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/900px-Flag_of_Senegal.svg.png"},"31":{"id":31,"name":"Colombia","fifaCode":"COL","flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/450px-Flag_of_Colombia.png"},"32":{"id":32,"name":"Japan","fifaCode":"JPN","flag":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/900px-Flag_of_Japan.png"}},
      tournaments: [{"id":14,"createdBy":{"id":1,"username":"uzicohen9@gmail.com","nickname":"uzinio","credentialsNonExpired":true,"accountNonLocked":true,"accountNonExpired":true,"authorities":[{"authority":"admin"}]},"name":"Cortana Russia 2018","dateCreated":"2018-05-26T04:56:37.869+0000","competition":{"id":3,"name":"World Cup 2018","photoUrl":"https://www.justreadonline.com/wp-content/uploads/2018/01/rusia-cup.jpg","description":"FIFA Soccer world cup in Russia 2018"},"bets":[{"id":16,"game":{"id":4,"team1_id":1,"team2_id":2,"goalsTeam1":null,"goalsTeam2":null,"level":"Group A, game 1","state":"Not Started","date":"14-06-2018 15:00:00","localDate":"2018-06-14T12:00:00.000+0000"},"team1":0,"team2":0,"date":"14-06-2018 15:00:00"},{"id":17,"game":{"id":5,"team1_id":3,"team2_id":4,"goalsTeam1":null,"goalsTeam2":null,"level":"Group A, game 2","state":"Not Started","date":"15-06-2018 12:00:00","localDate":"2018-06-15T09:00:00.000+0000"},"team1":0,"team2":0,"date":"15-06-2018 12:00:00"},{"id":18,"game":{"id":6,"team1_id":1,"team2_id":3,"goalsTeam1":null,"goalsTeam2":null,"level":"Group A, game 3","state":"Not Started","date":"19-06-2018 18:00:00","localDate":"2018-06-19T15:00:00.000+0000"},"team1":0,"team2":0,"date":"19-06-2018 18:00:00"},{"id":19,"game":{"id":7,"team1_id":4,"team2_id":2,"goalsTeam1":null,"goalsTeam2":null,"level":"Group A, game 4","state":"Not Started","date":"20-06-2018 15:00:00","localDate":"2018-06-20T12:00:00.000+0000"},"team1":0,"team2":0,"date":"20-06-2018 15:00:00"},{"id":20,"game":{"id":8,"team1_id":4,"team2_id":1,"goalsTeam1":null,"goalsTeam2":null,"level":"Group A, game 5","state":"Not Started","date":"25-06-2018 14:00:00","localDate":"2018-06-25T11:00:00.000+0000"},"team1":0,"team2":0,"date":"25-06-2018 14:00:00"},{"id":21,"game":{"id":9,"team1_id":2,"team2_id":3,"goalsTeam1":null,"goalsTeam2":null,"level":"Group A, game 6","state":"Not Started","date":"25-06-2018 14:00:00","localDate":"2018-06-25T11:00:00.000+0000"},"team1":0,"team2":0,"date":"25-06-2018 14:00:00"},{"id":22,"game":{"id":10,"team1_id":5,"team2_id":6,"goalsTeam1":null,"goalsTeam2":null,"level":"Group B, game 1","state":"Not Started","date":"15-06-2018 18:00:00","localDate":"2018-06-15T15:00:00.000+0000"},"team1":0,"team2":0,"date":"15-06-2018 18:00:00"},{"id":23,"game":{"id":11,"team1_id":7,"team2_id":8,"goalsTeam1":null,"goalsTeam2":null,"level":"Group B, game 2","state":"Not Started","date":"15-06-2018 15:00:00","localDate":"2018-06-15T12:00:00.000+0000"},"team1":0,"team2":0,"date":"15-06-2018 15:00:00"},{"id":24,"game":{"id":12,"team1_id":5,"team2_id":7,"goalsTeam1":null,"goalsTeam2":null,"level":"Group B, game 3","state":"Not Started","date":"20-06-2018 12:00:00","localDate":"2018-06-20T09:00:00.000+0000"},"team1":0,"team2":0,"date":"20-06-2018 12:00:00"},{"id":25,"game":{"id":13,"team1_id":8,"team2_id":6,"goalsTeam1":null,"goalsTeam2":null,"level":"Group B, game 4","state":"Not Started","date":"20-06-2018 18:00:00","localDate":"2018-06-20T15:00:00.000+0000"},"team1":0,"team2":0,"date":"20-06-2018 18:00:00"}]}]
    });

    // axios({
    //   method: 'get',
    //   url: '/api/personalPage',
    //   headers: auth.createAuthorizationTokenHeader(),
    //   data: {}
    // }).then(response => {
    //   this.setState({ tournaments: response.data.tournaments, teams: response.data.teams });
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
      tournamentItems[tour.id] = <Tournament key={tour.id} pathTo={"/tournament" + tour.id} name={tour.name} teams={this.state.teams} bets={tour.bets}/>;
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