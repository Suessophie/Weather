import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CityShape } from '../../shapes/CityShape';

import './ItemOfCities.scss';

export const ItemOfCities = ({
  city,
  deleteCityFromList,
  refreshDataForCity,
  getDetailsForCity,
}) => (
  <div className="itemOfCities">
    <Link
      className="itemOfCities__card"
      to={`/details/${city.name}`}
      onClick={() => getDetailsForCity(city.name)}
    >
      <h2 className="itemOfCities__title">
        {city.name}
      </h2>
      <p className="itemOfCities__weather">
        {city.weather[0].main}
      </p>
      <p className="itemOfCities__temp">
        {Math.round(city.main.temp - 273.15)}
        &deg;C
      </p>
    </Link>
    <button
      className="itemOfCities__button"
      type="button"
      onClick={() => deleteCityFromList(city.id)}
    >
      Delete
    </button>
    <button
      className="itemOfCities__button"
      type="button"
      onClick={() => refreshDataForCity(city.name)}
    >
      Refresh
    </button>
  </div>
);

ItemOfCities.propTypes = {
  city: CityShape.isRequired,
  deleteCityFromList: PropTypes.func.isRequired,
  refreshDataForCity: PropTypes.func.isRequired,
  getDetailsForCity: PropTypes.func.isRequired,
};
