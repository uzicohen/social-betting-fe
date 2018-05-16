import React from 'react';

import NotSignedSection from './NotSingedInSection';
import SignedSection from './SigendInSection';
import axios from 'axios';
import auth from './api/auth';

export default class MainSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = { signedIn: false };
  }


  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = auth.getJwtToken();
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/users/me'
    }).then(response => {
      this.setState({ signedIn: true });
    }).catch(error => {
      this.setState({ signedIn: false });
      console.log(error);
    });
  }

  render() {

    if (!this.state.signedIn) {
      return <NotSignedSection />
    }

    return <MainSection />;
  }
}