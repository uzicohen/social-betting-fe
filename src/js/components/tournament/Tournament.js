import React from 'react';
import BrowserHistory from 'react-history';
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import TournamentNav from './TournamentNav';
import TournamentContent from './TournamentContent';

export default class Tournament extends React.Component {
    render() {
        var linkToHome = this.props.pathTo + "/";

        return (
            <Router history={BrowserHistory}>
                <div className="container-fluid">
                    <div className="row" style={{ 'marginTop': '30px' }}>
                        <div className="xs-4">
                            <Link to={linkToHome}>
                                <h1>{this.props.name}</h1>
                            </Link>
                        </div>
                        <div className="xs-8" />
                    </div>
                    <TournamentNav pathTo={this.props.pathTo} />
                    <div className="row" style={{ 'marginBottom': '20px' }} />
                    <TournamentContent pathTo={this.props.pathTo} bets={this.props.bets} />
                </div>
            </Router>
        );
    }
}

