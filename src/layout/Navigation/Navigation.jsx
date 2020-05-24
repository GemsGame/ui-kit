import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import SandboxButton from '../../components/Button/SandboxButton';
import './Navigation.scss';
import Main from '../Main/Main';

const Navigation = (props) => (
  <Router>
    <div className="navigation">
      <div className="navigation__wrapper">
        <ul className="navigation__list">
          <li className="navigation__li"><Link to="/button">Button</Link></li>
          <li className="navigation__li"><Link to="/">Input</Link></li>
          <li className="navigation__li"><Link to="/button">Toggle</Link></li>
        </ul>
      </div>
    </div>
    <Switch>
      <Route path="/button">
        <Main><SandboxButton /></Main>
      </Route>
    </Switch>
  </Router>
);

Navigation.propTypes = {

};

export default Navigation;
