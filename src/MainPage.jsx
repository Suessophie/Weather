import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ListOfCities } from './ListOfCities';
import { FormToAddCity } from './FormToAddCity';

import { getWeatherForCity } from './api/api';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialValue,
  );

  const saveValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, saveValue];
};

export const MainPage = ({ getDetailsForCity }) => {
  const [listOfCities, setListOfCities] = useLocalStorage('cities', []);
  const [hasErrorOnInput, setHasErrorOnInput] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [valueOfEnteredCity, setValueOfEnteredCity] = useState('');

  const enteredCity = (event) => {
    const { value } = event.target;

    if (value !== valueOfEnteredCity) {
      setHasErrorOnInput(false);
      setAlreadyAdded(false);
    }

    setValueOfEnteredCity(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!listOfCities.some(
      itemOfCities => itemOfCities.name === valueOfEnteredCity,
    )) {
      addCity(valueOfEnteredCity);
      setValueOfEnteredCity('');
    } else {
      setAlreadyAdded(true);
    }
  };

  const addCity = (city) => {
    getWeatherForCity(city)
      .then((weather) => {
        if (weather.id) {
          setListOfCities([...listOfCities, weather]);
        } else {
          setHasErrorOnInput(true);
        }
      });
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
    <div className="mainPage">
      {listOfCities.length ? (
        <ListOfCities
          listOfCities={listOfCities}
          deleteCityFromList={deleteCityFromList}
          refreshDataForCity={refreshDataForCity}
          getDetailsForCity={getDetailsForCity}
        />
      ) : (
        <p>Please, enter name of the city</p>
      )}
      <FormToAddCity
        hasErrorOnInput={hasErrorOnInput}
        alreadyAdded={alreadyAdded}
        enteredCity={enteredCity}
        handleSubmit={handleSubmit}
        valueOfEnteredCity={valueOfEnteredCity}
      />
    </div>
  );
};

MainPage.propTypes = {
  getDetailsForCity: PropTypes.func.isRequired,
};
