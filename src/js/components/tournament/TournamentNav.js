import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class TournamentNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var linkToLeadingBoard = this.props.pathTo + "/leading-board";
        var linkToGames = this.props.pathTo + "/games";
        var linkToGeneralBet = this.props.pathTo + "/general-bet";
        return (
            <div className="row">
                <Nav bsStyle="tabs" justified activeKey={1}>
                    <LinkContainer to={linkToLeadingBoard}>
                        <NavItem eventKey={1}>
                            Leading Board
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to={linkToGames}>
                        <NavItem eventKey={2}>
                            Games
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to={linkToGeneralBet}>
                        <NavItem eventKey={3}>
                            General Bet
                        </NavItem>
                    </LinkContainer>
                </Nav>

            </div>
        );
    }
}