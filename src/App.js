import React from 'react';
import { Switch, Route} from 'react-router-dom';


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
      <h1 className="app-header">Cyber</h1>
        <Switch>
          <Route exact path={"/"} component={GameMap}/>
          <Route path={"/about"} component={About}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/registration"} component={Register}/>
          {/*Make Private*/}
        </Switch>
    </div>
  );
}

export default App;
