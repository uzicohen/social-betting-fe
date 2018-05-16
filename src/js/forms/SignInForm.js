
import React from 'react';

export default class SignInForm extends React.Component {
    render() {
        return (
            <form className="form-horizontal" method="POST">
                <div className="form-group">
                    <label for="emailLogin" className="cols-sm-2 control-label">Email</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input type="text" className="form-control" name="j_username"
                                id="emailLogin" placeholder="Enter your Email" />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label for="passwordLogin" className="cols-sm-2 control-label">Password</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input
                                type="password" className="form-control" name="j_password"
                                id="passwordLogin" placeholder="Enter your Password" />
                        </div>
                    </div>
                </div>
                <div className="pull-left" style={{ 'marginTop': '28px' }}>
                    <input type="submit" name="Submit" className="btn btn-success"></input>
                </div>
            </form>
        );
    }
}



