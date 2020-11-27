import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import { MainPage } from './components/MainPage';
import { DetailsPage } from './components/DetailsPage';

export const App = () => {
  const [detailsForCity, setDetailsForCity] = useState('');

  const getDetailsForCity = (city) => {
    setDetailsForCity(city);
  };

  return (
    <div className="app">
      <h1 className="app__title">
        Weather: Anywhere in UA
      </h1>

      <Switch>
        <Route path="/details/:city">
          <DetailsPage city={detailsForCity} />
        </Route>

        <Route path="/" exact>
          <MainPage getDetailsForCity={getDetailsForCity} />
        </Route>

        <p>Page not found</p>
      </Switch>
    </div>
  );
};
