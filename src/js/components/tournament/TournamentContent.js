import React from 'react';

import LeadingBoard from './leadingboard/LeadingBoard';
import Games from './games/Games';
import GeneralBet from './generalbet/GeneralBet';

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
        var linkToHome = this.props.pathTo + "/";
        var linkToLeadingBoard = this.props.pathTo + "/leading-board";
        var linkToGames = this.props.pathTo + "/games";
        var linkToGeneralBat = this.props.pathTo + "/general-bet";
        return (
            <div classNameName="row">

                <Switch>
                    <Redirect path={linkToHome} exact to={linkToLeadingBoard} />
                    <Route path={linkToLeadingBoard} exact component={LeadingBoard} />
                    <Route path={linkToGames} exact component={Games} />
                    <Route path={linkToGeneralBat} exact component={GeneralBet} />
                </Switch>
            </div >
        );
    }
}