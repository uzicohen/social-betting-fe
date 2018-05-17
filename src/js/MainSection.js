import React from 'react';

import NotSignedInSection from './NotSignedInSection';
import SignedInSection from './SignedInSection';
import axios from 'axios';
import auth from './api/auth';

export default class MainSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = { signedIn: false, currentUser: { nickname: undefined } };
    this.setGlobalSignIn = this.setGlobalSignIn.bind(this);
  }


  setGlobalSignIn(val) {
    this.setState({ signedIn: val });
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/users/me',
      headers: auth.createAuthorizationTokenHeader(),
      data: {}
    }).then(response => {
      this.setState({ signedIn: true, currentUser: response.data });
    }).catch(error => {
      this.setState({ signedIn: false });
    });
  }

  render() {
    return (
      this.state.signedIn ? <SignedInSection currentUser={this.state.currentUser} setGlobalSignIn={this.setGlobalSignIn} />
        : <NotSignedInSection setGlobalSignIn={this.setGlobalSignIn} />
    );

  }
}