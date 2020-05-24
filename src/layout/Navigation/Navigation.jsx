import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ButtonCases from '../../components/Button/ButtonCases';
import './Navigation.scss';
import Main from '../Main/Main';

const Navigation = (props) => (
  <Router>
    <div className="navigation">
      <div className="navigation__wrapper">
        <ul className="navigation__list">
          <li className="navigation__li"><Link to="/ui-kit/button">Button</Link></li>
          <li className="navigation__li"><Link to="/">Input</Link></li>
          <li className="navigation__li"><Link to="/button">Toggle</Link></li>
        </ul>
      </div>
    </div>
    <Switch>
      <Route path="/ui-kit">
        <Main><ButtonCases /></Main>
      </Route>
      <Route path="/ui-kit/button">
        <Main><ButtonCases /></Main>
      </Route>
    </Switch>
  </Router>
);

Navigation.propTypes = {

};

export default Navigation;
