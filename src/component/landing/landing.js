import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';
import Login from '../login/login';

class Landing extends React.Component {
  determineLanding(token) {
    if (token) {
      console.log('token found.');
      return <Redirect to={routes.FE_AUTH_DASHBOARD}/>;
    } // else
    console.log('no token found');
    return <Redirect to={routes.FE_NO_AUTH_LANDING}/>;
  }

  render() {
    const { token, location } = this.props;
    console.log(location.pathname);
    return (
      <div>
        { this.determineLanding(token) }
        <p>You shouldn't be here. Ever.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  // pDoSignUp: user => dispatch(authActions.signupRequest(user)),
  // pDoLogin: user => dispatch(authActions.loginRequest(user)),
  // pGetUsers: users => dispatch(dataActions.getUsers(users)),
});

Landing.propTypes = {
  location: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
