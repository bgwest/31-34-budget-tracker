import React from 'react';
import { Link } from 'react-router-dom';

class AppUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="landingUI">
        <Link to='/' className="landingUILinks"> ⬅ Back to Dash </Link>
        <Link to='/sitetips' className="landingUILinks"> Help </Link>
        <Link to='/newsection' className="landingUILinks"> Create Section </Link>
        { /* <a href={oauthHref} className="landingUILinks">Login with Google</a> */ }
      </nav>
    );
  }
}

export default AppUI;
