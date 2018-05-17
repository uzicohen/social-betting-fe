
import React from 'react';

import axios from 'axios';
import auth from '../api/auth';

export default class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", password: "" };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/auth/login',
            data: {
                username: this.state.name,
                password: this.state.password
            }
        }).then(response => {
            auth.setJwtToken(response.data.access_token);
            this.props.setGlobalSignIn(true);
        }).catch(error => {
            //
        });
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="emailLogin" className="cols-sm-2 control-label">Email</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input value={this.state.name} onChange={this.handleNameChange}
                                type="text" className="form-control" placeholder="Enter your Email" />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label for="passwordLogin" className="cols-sm-2 control-label">Password</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input value={this.state.password} onChange={this.handlePasswordChange}
                                type="password" className="form-control" placeholder="Enter your Password" />
                        </div>
                    </div>
                </div>
                <div className="pull-left" style={{ 'marginTop': '28px' }}>
                    <input type="submit" value="submit" className="btn btn-success"></input>
                </div>
            </form>
        );
    }
}



