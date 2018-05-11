
import React from 'react';

export default class NewTournamentForm extends React.Component {
    render() {
        return (
            <div className="row" style={{ 'marginTop': '30px' }}>

                <form encType="multipart/form-data" className="form-horizontal" method="POST" action="newTournament">

                    <div className="form-group">
                        <div className="input-group">
                            <input inputType="register" autoComplete="off" type="text" className="form-control" name="name" placeholder="Enter new Name" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="cols-sm-10">
                            <div className="input-group">
                                <input input-type="register" autoComplete="off" type="text" className="form-control" name="nickname" placeholder="Enter new Nickname" />
                            </div>
                        </div>
                    </div>

                    <label className="control-label">Upload Photo</label>

                    <div className="input-group">
                        <span className="input-group-btn">
                            <span className="btn btn-default btn-file">
                                Browse…
                    <input type="file" id="imgInp" />
                            </span>
                        </span>

                        <div className="pull-left" style={{ 'marginTop': '28px' }}>
                            <input input-type="register" type="submit" name="Submit" className="btn btn-success round-button" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}