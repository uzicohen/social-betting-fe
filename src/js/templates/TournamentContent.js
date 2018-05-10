import React from 'react';

import LeadingBoard from './LeadingBoard';

import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

export default class TournamentContent extends React.Component {
    render() {
        var linkToLeadingBoard = this.props.pathTo + "/leading-board";
        var linkToGames = this.props.pathTo + "/games";
        var linkToGeneralBat = this.props.pathTo + "/general-bet";
        return (
            <div classNameName="row">

                <Switch>
                    <Route path={linkToLeadingBoard} exact component={LeadingBoard} />
                    <Route path={linkToGames} exact render = {() => <p>Games</p>} />
                    <Route path={linkToGeneralBat} exact component={LeadingBoard} />
                </Switch>
            </div >
        );
    }
}