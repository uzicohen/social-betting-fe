import React from 'react';

import {
    Button,
    Grid,
    Row,
    Col,
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { home } from 'react-icons-kit/icomoon/home';
import { ic_grid_on } from 'react-icons-kit/md/ic_grid_on';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_perm_contact_calendar } from 'react-icons-kit/md/ic_perm_contact_calendar';
import { ic_schedule } from 'react-icons-kit/md/ic_schedule';
import { ic_format_list_numbered } from 'react-icons-kit/md/ic_format_list_numbered';


export default class Tournament extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: this.props.name }
    }

    render() {
        const LeadingBoard = () =>
            <ul>
                <ui>Uzi</ui>
                <ui>Almog</ui>
            </ul>;

        return (
            <Router>
                <div>
                    <div className="hidden-xs hidden-sm hidden-md col-sm-3 col-md-2 sidebar">
                        <ul class="nav nav-sidebar">
                            <li id="rankItemSide" className="active">
                                <Link to="/tournament1/leading-board" />
                            </li>
                            <li id="gamesItemSide"><a href="#">Games</a></li>
                            <li id="generalBetItemSide"><a href="#">General Bet</a></li>
                            <li id="analyticsItemSide"><a href="#">Analytics</a></li>
                        </ul>
                    </div>

                    <div className="container-fluid">
                        <Switch>
                            <Route path="/tournament1/leading-board" exact component={LeadingBoard} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

