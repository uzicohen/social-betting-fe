import React from 'react';

import NotSignedInSection from './NotSignedInSection';
import SignedInSection from './SignedInSection';
import axios from 'axios';
import auth from './api/auth';

export default class MainSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = { signedIn: false, isLoading: true, currentUser: { nickname: undefined } };
    this.setGlobalSignedIn = this.setGlobalSignedIn.bind(this);
  }


  setGlobalSignedIn(val) {
    this.setState({ signedIn: val });
  }

  componentDidMount() {
    this.setState({
      signedIn: true, isLoading: false, currentUser: { "id": 1, "username": "uzicohen9@gmail.com", "nickname": "uzinio", "accountNonExpired": true, "accountNonLocked": true, "credentialsNonExpired": true, "authorities": [{ "authority": "admin" }] }
    });

    // axios({
    //   method: 'get',
    //   url: '/api/users/me',
    //   headers: auth.createAuthorizationTokenHeader(),
    //   data: {}
    // }).then(response => {
    //   this.setState({ signedIn: true, isLoading: false, currentUser: response.data });
    // }).catch(error => {
    //   this.setState({ signedIn: false, isLoading: false });
    // });
  }

  render() {
    return (
      this.state.isLoading ? <h3> Loading...</h3 > :
        this.state.signedIn ? <SignedInSection currentUser={this.state.currentUser} setGlobalSignedIn={this.setGlobalSignedIn} />
          : <NotSignedInSection setGlobalSignedIn={this.setGlobalSignedIn} />
    );

  }
}