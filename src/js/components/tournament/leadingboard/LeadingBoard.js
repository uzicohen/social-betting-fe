import React from 'react';
import { Link } from 'react-router-dom';

import LeadingBoardEntry from './LeadingBoardEntry';

export default class LeadingBoard extends React.Component {
  render() {

    const data = [1, 2, 3, 4, 5, 6].map((idx) => {
      var props = {};
      props.rank = idx;
      props.name = 'User' + idx;
      props.nickName = 'Nickname' + idx;
      props.score = 60 - idx;
      return <LeadingBoardEntry key={idx} {...props} />;
    });

    return (
      <div>

        <div className="row" />

        <div className="row">
          <div className="col-xs-1"></div>

          <div className="col-xs-10">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Nick Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody id="ranking-placeholder">
                  {data}
                </tbody>
              </table>
            </div>

            <div className="col-xs-1" />
          </div>
        </div>
      </div >
    );
  }
}