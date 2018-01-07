import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Repositories from './components/Repositories';
import Repository from './components/Repository';

const App = () => (
  <Router>
    <div>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/repositories">Reposistories</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/repositories" component={Repositories} />
        <Route exact path="/repository/:id" component={Repository} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)
export default App