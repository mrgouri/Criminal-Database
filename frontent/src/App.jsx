import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import LoginPage from './LoginPage';
import SearchPage from './SearchPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path="/search">
          {isAuthenticated ? <SearchPage /> : <Redirect to="/SearchPage" />}
        </Route>
        <Redirect to="/LoginPage" />
      </Switch>
    </Router>
  );
}

export default App;
