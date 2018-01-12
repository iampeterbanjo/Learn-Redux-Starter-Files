import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const app = (
  <div>
    <Main />
    <Router history={browserHistory}>
      <Route path="/" component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Router>
  </div>
)

render(app, document.getElementById('root'));
