import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import VillagerContainer from '../../containers/VillagerContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <VillagerContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}