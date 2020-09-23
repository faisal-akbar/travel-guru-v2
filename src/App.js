import React, { createContext, useState } from 'react';

import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import Login from './Components/Login/Login';
import Hotel from './Components/Hotel/Hotel';
import NoMatch from './Components/NoMatch/NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import HotelDetails from './Components/HotelDetails/HotelDetails';

export const UserContext = createContext();
export const PlaceContext = createContext();

function App() {
  const [loggedInUser, SetLoggedInUser] = useState({});
  // const [selectedPlace, setSelectedPlace] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      {/* <PlaceContext.Provider value={[selectedPlace, setSelectedPlace]}> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route path='/place-details/:placeId'>
            <PlaceDetails />
          </Route>
          <PrivateRoute path='/hotel-details/:selectedPlace'>
            <Hotel></Hotel>
          </PrivateRoute>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      {/* </PlaceContext.Provider> */}
    </UserContext.Provider>
  );
}

export default App;
