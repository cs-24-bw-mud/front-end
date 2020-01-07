import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.scss';

// Switch/ Redirect Authroutes

import Header from './components/Header';
import GameMap from './components/Map';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="spa-container">
        <Header />
        Welcome to Game!
        <Switch>
          <Route exact path={"/"} component={GameMap}/>
          <Route exact path={"/about"} component={About}/>
          <Route exact path={"/login"} component={Login}/>
          <Route exact path={"/register"} component={Register}/>
          {/*Make Private*/}
        </Switch>
    </div>
  );
}

export default App;
