import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TravelPlaceDetail from './components/TravelPlaceDetail/TravelPlaceDetail';
import Destination from './components/Destination/Destination';
import Signin from './components/LoginDetail/Signin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {

  const [signedInUser, setSignedInUser] = useState({})
  const [signedOutUser, setSignedOutUser] = useState({})

  return (
    <UserContext.Provider value={([signedInUser, setSignedInUser], [signedOutUser, setSignedOutUser])}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/booking/:id">
            <TravelPlaceDetail />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
