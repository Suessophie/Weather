import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

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
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(PropTypes.shape({
      main: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  deleteCityFromList: PropTypes.func.isRequired,
  refreshDataForCity: PropTypes.func.isRequired,
  getDetailsForCity: PropTypes.func.isRequired,
};
