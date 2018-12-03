import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';
import Login from '../login/login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/sitetips' component={Dashboard} />
            <Route exact path='/newsection' component={Dashboard} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
