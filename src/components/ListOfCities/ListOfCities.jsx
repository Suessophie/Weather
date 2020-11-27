import React from 'react';
import PropTypes from 'prop-types';
import { CityShape } from '../../shapes/CityShape';

import { ItemOfCities } from '../ItemOfCities';
import './ListOfCities.scss';

export const ListOfCities = ({
  listOfCities,
  deleteCityFromList,
  refreshDataForCity,
  getDetailsForCity,
}) => (
  <div className="listOfCities">
    {listOfCities.map(city => (
      <ItemOfCities
        key={city.id}
        city={city}
        deleteCityFromList={deleteCityFromList}
        refreshDataForCity={refreshDataForCity}
        getDetailsForCity={getDetailsForCity}
      />
    ))}
  </div>
);

ListOfCities.propTypes = {
  listOfCities: PropTypes.arrayOf(CityShape).isRequired,
  deleteCityFromList: PropTypes.func.isRequired,
  refreshDataForCity: PropTypes.func.isRequired,
  getDetailsForCity: PropTypes.func.isRequired,
};
