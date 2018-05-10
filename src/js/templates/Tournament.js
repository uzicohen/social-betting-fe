import React from 'react';

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


import TournamentNav from './TournamentNav';

export default class Tournament extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: this.props.name }
    }

    render() {
        const LeadingBoard = () =>
            <ul>
                <li>Uzi</li>
                <li>Almog</li>
            </ul>;

        return (
            <Router>
                <div className="container-fluid">
                    <div className="row" style={{ 'marginTop': '30px' }}>
                        <div className="xs-4">
                            <h1>{this.state.name}</h1>
                        </div>
                        <div className="xs-8" />
                    </div>
                    <TournamentNav pathTo={this.state.name} />

                </div>
            </Router>
        );
    }
}

