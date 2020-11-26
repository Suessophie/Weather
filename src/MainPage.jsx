import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ListOfCities } from './ListOfCities';
import { FormToAddCity } from './FormToAddCity';

import { getWeatherForCity } from './api/api';

export const MainPage = ({ getDetailsForCity }) => {
  const [listOfCities, setListOfCities] = useState([]);
  const [addedCity, setAddedCity] = useState('');
  const [city, setCity] = useState('Kharkiv');

  useEffect(() => {
    getWeatherForCity(city)
      .then(cityWithWeather => setListOfCities(
        [...listOfCities, cityWithWeather],
      ));
  }, [city]);

  const enteredCity = (event) => {
    const { value } = event.target;

    setAddedCity(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCity(addedCity);
    setAddedCity('');
  };

  const deleteCityFromList = (id) => {
    const filteredListOfCities = listOfCities.filter(
      itemOfCities => itemOfCities.id !== id,
    );

    setListOfCities(filteredListOfCities);
  };

  const refreshDataForCity = async(nameOfCity) => {
    const currentWeather = await getWeatherForCity(nameOfCity);

    const updatedListOfCities = listOfCities.map((itemOfCities) => {
      if (itemOfCities.name === nameOfCity) {
        return currentWeather;
      }

      return { ...itemOfCities };
    });

    setListOfCities(updatedListOfCities);
  };

  return (
    <>
      {listOfCities.length && (
        <ListOfCities
          listOfCities={listOfCities}
          deleteCityFromList={deleteCityFromList}
          refreshDataForCity={refreshDataForCity}
          getDetailsForCity={getDetailsForCity}
        />
      )}
      <FormToAddCity
        handleSubmit={handleSubmit}
        addedCity={addedCity}
        enteredCity={enteredCity}
      />
    </>
  );
};

MainPage.propTypes = {
  getDetailsForCity: PropTypes.func.isRequired,
};
