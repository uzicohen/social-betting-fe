import React from "react";

import MainTemplate from "../present/MainTemplate";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainTemplate/>
      </div>
    );
  }
}
