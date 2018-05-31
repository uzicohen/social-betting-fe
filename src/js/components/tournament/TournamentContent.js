import React from 'react';

import LeadingBoard from './leadingboard/LeadingBoard';
import Bets from './bets/Bets';
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
        var linkToBets = this.props.pathTo + "/bets";
        var linkToGeneralBet = this.props.pathTo + "/general-bet";
        return (
            <div classNameName="row">
                <Switch>
                    <Redirect path={linkToHome} exact to={linkToLeadingBoard} />
                    <Route path={linkToLeadingBoard} exact component={LeadingBoard} />
                    <Route path={linkToBets} component={() => <Bets pathTo={linkToBets} teams={this.props.teams} bets={this.props.bets} />} />
                    <Route path={linkToGeneralBet} exact component={GeneralBet} />
                </Switch>
            </div >
        );
    }
}