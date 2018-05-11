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

    constructor(props) {
        super(props);
        this.state = { name: this.props.name, pathTo: this.props.pathTo }
    }

    render() {
        var linkToHome = this.state.pathTo + "/";

        return (
            <Router history={BrowserHistory}>
                <div className="container-fluid">
                    <div className="row" style={{ 'marginTop': '30px' }}>
                        <div className="xs-4">
                            <Link to={linkToHome}>
                                <h1>{this.state.name}</h1>
                            </Link>
                        </div>
                        <div className="xs-8" />
                    </div>
                    <TournamentNav pathTo={this.state.pathTo} />
                    <div className="row" style={{ 'marginBottom': '20px' }} />
                    <TournamentContent pathTo={this.state.pathTo} />
                </div>
            </Router>
        );
    }
}

