import React from 'react';
import { Switch, Route} from 'react-router-dom';

import GameMap from './components/Map';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedHeader from './components/header/ProtectedHeader';
import Header from './components/header/Header';

import ProtectedRoute from './utils/protectedRoute';
import ProtectedNav from './utils/protectedNav';

// [ ] TODO: create fn to initialize a player upon login
// [x] TODO: create fn to fetch map on mount
// [ ] TODO: create fn to move player onClick
// [ ] TODO: user coming back as Anonymous on init request

// [ ] TODO: create a map builder fn (divs or library)

function App() {
  return (
    <div className="spa-container">
        <ProtectedNav path="/" component={ProtectedHeader}/>
      
        <Switch>
          <Route path={"/about"} component={About}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/registration"} component={Register}/>
          <ProtectedRoute exact path="/" component={GameMap}/>
        </Switch>
    </div>
  );
}

export default App;
