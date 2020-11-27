import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import { MainPage } from './MainPage';
import { DetailsPage } from './DetailsPage';

export const App = () => {
  const [detailsForCity, setDetailsForCity] = useState('');

  const getDetailsForCity = (city) => {
    setDetailsForCity(city);

    // eslint-disable-next-line
    console.log(city);
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
      </Switch>
    </div>
  );
};
