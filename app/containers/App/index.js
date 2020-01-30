/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import childApp1 from 'containers/childApp1/Loadable';
import childApp2 from 'containers/childApp2/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App(props) {
  const { history } = props;
  return (
    <div>
      <BrowserRouter basename="/parent" history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/childApp1" component={childApp1} />
          <Route exact path="/childApp2" component={childApp2} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
