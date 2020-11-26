import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export const ItemOfCities = ({
  city,
  deleteCityFromList,
  refreshDataForCity,
  getDetailsForCity,
}) => (
  <Link
    to={`/details/${city.name}`}
    onClick={() => getDetailsForCity(city.name)}
  >
    <div>{city.name}</div>
    <div>
      Temperature:
      ^C
    </div>
    <div>
      Feels like:
      ^C
    </div>
    <div>
      Humidibity:
      %
    </div>
    <div>
      Speed of wind
    </div>
    <button
      type="button"
      onClick={() => deleteCityFromList(city.id)}
    >
      Delete
    </button>
    <button
      type="button"
      onClick={() => refreshDataForCity(city.name)}
    >
      Refresh
    </button>
  </Link>
);

ItemOfCities.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  deleteCityFromList: PropTypes.func.isRequired,
  refreshDataForCity: PropTypes.func.isRequired,
  getDetailsForCity: PropTypes.func.isRequired,
};
