import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './sass/app.scss';

import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />

            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
