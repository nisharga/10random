import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Country from './Component/Country'
import SingleCountry from './Component/SingleCountry';

function App() {
  return (
    <div className="App">
      <h1>HelloBD From Bangladesh</h1>
      <Router>
      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/country">All Country</Link>
            </li>
      </ul>

      <Switch>
          <Route exact path="/">
            <h2>Welcome To Our Home Page</h2>
          </Route>

          <Route path="/about">
            <h2>This is About</h2>
            <p>Home is not place it not suitable
              i hobe ho ehf djf dfndfndkf dkfndkf dkfdk
            </p>
          </Route>

          

          <Route path="/country/:CountryCode">
            <SingleCountry></SingleCountry>
          </Route>

          <Route path="/country">
            <Country></Country>
          </Route>
          
          <Route path="/*">
            <h2>404 Error</h2>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
