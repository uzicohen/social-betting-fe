
import React from 'react';

export default class RegisterForm extends React.Component {
    render() {
        return (
            <form id="register" className="form-horizontal" method="POST" action="signin">
                <div className="form-group">
                    <label for="name" className="cols-sm-2 control-label">Name</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input type="text" className="form-control" name="name" id="name"
                                placeholder="Enter your Name" autoComplete="off" />
                        </div>
                    </div>

                    <label id="nameError" className="cols-sm-2 control-label hidden">
                        <font color="red">Name cannot be empty</font>
                    </label>

                </div>

                <div className="form-group">
                    <label for="nickname" className="cols-sm-2 control-label">Nickname</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input type="text" className="form-control" name="nickname"
                                id="nickname" placeholder="Enter your Nickname" autoComplete="off" />
                        </div>
                    </div>
                    <label id="nicknameError" className="cols-sm-2 control-label hidden">
                        <font color="red">Be social and choose a nickname</font>
                    </label>
                </div>

                <div className="form-group">
                    <label for="email" className="cols-sm-2 control-label">Email</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input type="text" className="form-control" name="emailRegister"
                                id="email" placeholder="Enter your Email" autoComplete="off" />
                        </div>
                    </div>

                    <label id="emailRegexError" className="cols-sm-2 control-label hidden">
                        <font color="red">Bad email format</font>
                    </label>
                    <label id="emptyEmailFormat" className="cols-sm-2 control-label hidden">
                        <font color="red">Email cannot be empty</font>
                    </label>
                </div>

                <div className="form-group">
                    <label for="passwordRegister" className="cols-sm-2 control-label">Password</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input type="password" className="form-control" name="passwordRegister"
                                id="password" placeholder="Enter your Password" autoComplete="off" />
                        </div>
                    </div>
                    <label id="passwordError" className="cols-sm-2 control-label hidden">
                        <font color="red">Too short (at least 6)</font>
                    </label>
                </div>

                <div className="form-group">
                    <label for="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                    <div className="cols-sm-10">
                        <div className="input-group">
                            <input type="password" className="form-control" name="confirm"
                                id="confirm" placeholder="Confirm your Password" autoComplete="off" />
                        </div>
                    </div>
                    <label id="confirmPasswordError" className="cols-sm-2 control-label hidden">
                        <font color="red">Wrong confirmation</font>
                    </label>
                </div>

                <div className="form-group ">
                    <button type="button"
                        className="btn btn-primary btn-lg btn-block login-button">Register</button>
                </div>

            </form>
        );
    }
}



