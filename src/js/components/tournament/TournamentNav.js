import React from 'react';
import { Link } from 'react-router-dom';

export default class TournamentNav extends React.Component {
    render() {
        var linkToLeadingBoard = this.props.pathTo + "/leading-board";
        var linkToGames = this.props.pathTo + "/games";
        var linkToGeneralBet = this.props.pathTo + "/general-bet";
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
                        <Link to={linkToGeneralBet}>General Bat</Link>
                        {/* <a className="nav-link active" data-toggle="tab" href="#home" role="tab" aria-selected="false">General Bet</a> */}
                    </li>


                </ul>
            </div>
        );
    }
}