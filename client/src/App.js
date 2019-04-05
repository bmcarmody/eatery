import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';

import Navbar from './components/molecules/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import RecipeResults from './components/pages/RecipeResults';
import SavedRecipes from './components/pages/SavedRecipes';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode toekn and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/recipes" component={RecipeResults} />
            <Route exact path="/myrecipes" component={SavedRecipes} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
