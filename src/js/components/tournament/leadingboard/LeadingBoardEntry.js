import React from 'react';

export default class LeadingBoardEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rank: this.props.rank,
      name: this.props.name,
      nickName: this.props.nickName,
      score: this.props.score
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.rank}</td>
        <td>{this.state.name}</td>
        <td>{this.state.nickName}</td>
        <td>{this.state.score}</td>
      </tr>
    );
  }
}