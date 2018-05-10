import React from 'react';

import { Button } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

export default class TournamentNav extends React.Component {
    render() {
        var linkToLeadingBoard = this.props.pathTo + "/leading-board";
        var linkToGames = this.props.pathTo + "/games";
        var linkToGeneralBat = this.props.pathTo + "/general-bet";
        return (
            <div className="row">
                <ul class="nav nav-tabs nav-justified" role="tablist">
                    <li className="active" role="presentation">
                        <Link to={linkToLeadingBoard}>Leading Board</Link>
                        {/* <a className="nav-link active" data-toggle="tab" href="#home" role="tab" aria-selected="true">Leading Board</a> */}
                    </li>
                    <li role="presentation">
                        <Link to={linkToGames}>Games</Link>
                        {/* <a className="nav-link active" data-toggle="tab" href="#home" role="tab" aria-selected="false">Games</a> */}
                    </li>
                    <li role="presentation">
                        <Link to={linkToGeneralBat}>General Bat</Link>
                        {/* <a className="nav-link active" data-toggle="tab" href="#home" role="tab" aria-selected="false">General Bet</a> */}
                    </li>


                </ul>
            </div>
        );
    }
}