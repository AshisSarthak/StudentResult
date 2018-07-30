import React, { Component } from 'react';
import './App.css';
import { ResultComponent } from './result/result';
import {AdmissionComponent} from './admission/admission';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <section class='content'>
            <section class='routeSet'>
              <NavLink  className='routeLink'  activeClassName="active" to="/results">
                  <span className="navbar-item">Results</span>
              </NavLink>
              <section class='separator'></section>
              <NavLink className='routeLink' activeClassName="active" to="/admission">
                  <span className="navbar-item">Admission</span>
              </NavLink>
              
            </section>
            <Switch>
                <Route exact path="/" component={ResultComponent} />
                <Route path="/results" component={ResultComponent} />
                <Route path="/admission" component={AdmissionComponent} />
              </Switch>
          </section>
        </Router>
    );
  }
}

export default App;
