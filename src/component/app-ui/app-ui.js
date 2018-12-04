import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

// styles
import './app-ui.scss';

class AppUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="appUI">
        <Link to={routes.FE_AUTH_DASHBOARD} className="appUILinks"> ⬅ Back to Dash </Link>
        <Link to={routes.FE_SITE_TIPS} className="appUILinks"> Help </Link>
        <Link to={routes.FE_NEW_SECTION} className="appUILinks"> Create Section </Link>
        { /* <a href={oauthHref} className="landingUILinks">Login with Google</a> */ }
      </nav>
    );
  }
}

export default AppUI;
