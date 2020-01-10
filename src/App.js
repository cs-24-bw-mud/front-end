import React from 'react';
import { Switch, Route} from 'react-router-dom';

import GameMap from './components/Map';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedHeader from './components/header/ProtectedHeader';

import ProtectedRoute from './utils/protectedRoute';
import ProtectedNav from './utils/protectedNav';

<<<<<<< HEAD
=======
//font-awesome library
import "./assets/fontawesome"


>>>>>>> 335dcd782e2cabb41cb10430a749c950a03ec1d8
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
