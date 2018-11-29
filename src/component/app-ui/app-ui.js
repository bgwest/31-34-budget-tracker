import React from 'react';
import { Link } from 'react-router-dom';

class AppUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="landingUI">
        <Link to='/' className="landingUILinks"> ⬅ Splash </Link>
        <Link to='/sitetips' className="landingUILinks"> Site Tips </Link>
        <Link to='/newsection' className="landingUILinks"> New Section </Link>
        { /* <a href={oauthHref} className="landingUILinks">Login with Google</a> */ }
      </nav>
    );
  }
}

export default AppUI;
