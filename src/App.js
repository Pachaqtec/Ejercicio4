import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Heroes } from './Heroes/Heroes';
import { Personas } from './Personas/Personas';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Información</h1>
        <nav className="navegacion">
          <ul>
            <li><Link to="/Heroes">Heroes</Link></li>
            <li><Link to="/Personas">Personas</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/Heroes">
          <Heroes />
        </Route>
        <Route path="/Personas">
          <Personas />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
