
import React from 'react';

import SignInForm from './forms/SignInForm';
import RegisterModal from './modals/RegisterModal';

export default class NotSignedInSection extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Social Betting</a>
                        </div>
                    </div>
                </nav>

                <div className="jumbotron">
                    <div className="container">
                        <div className="row main">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <div className="main-login main-center">

                                    <SignInForm setGlobalSignedIn={this.props.setGlobalSignedIn} />

                                    <div style={{ 'marginTop': '150px' }}>
                                        <button type="button"
                                            className="btn btn-primary btn-lg btn-block login-button"
                                            data-toggle="modal" data-target="#registerModal">Register</button>
                                    </div>
                                    <RegisterModal hrefName="registerModal" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



