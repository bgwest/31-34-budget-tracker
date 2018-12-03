import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

class AppUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="landingUI">
        <Link to={routes.FE_AUTH_DASHBOARD} className="landingUILinks"> ⬅ Back to Dash </Link>
        <Link to={routes.FE_SITE_TIPS} className="landingUILinks"> Help </Link>
        <Link to={routes.FE_NEW_SECTION} className="landingUILinks"> Create Section </Link>
        { /* <a href={oauthHref} className="landingUILinks">Login with Google</a> */ }
      </nav>
    );
  }
}

export default AppUI;
