import React from 'react';

import RegisterForm from '../forms/RegisterForm';

export default class RegisterModal extends React.Component {
    render() {
        return (
            <div>
                <div id={this.props.hrefName} className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button-danger" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Register</h4>
                            </div>
                            <div className="modal-body">
                                <RegisterForm />

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger round-button modal-close-btn" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}