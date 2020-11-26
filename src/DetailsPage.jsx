import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getWeatherForCity } from './api/api';

export const DetailsPage = ({ city }) => {
  const [detailsOfWeather, setDetailsOfWeather] = useState(null);

  useEffect(() => {
    getWeatherForCity(city)
      .then((detailsFromServer) => {
        setDetailsOfWeather(detailsFromServer);
      });
  }, [city]);

  // eslint-disable-next-line
  console.log(detailsOfWeather);

  return (
    <div>
      {detailsOfWeather && (
        <>
          <h2>{detailsOfWeather.name}</h2>
          <div>
            {detailsOfWeather.weather[0].main}
          </div>
          <div>
            {`Temperature : ${Math.round(detailsOfWeather.main.temp - 273.15)}`}
          </div>
          <div>
            {`Feels like: ${Math.round(
              detailsOfWeather.main.feels_like - 273.15,
            )}`}
          </div>
          <div>
            {`Min temp: ${Math.round(
              detailsOfWeather.main.temp_min - 273.15,
            )}`}
          </div>
          <div>
            {`Max temp: ${Math.round(
              detailsOfWeather.main.temp_max - 273.15,
            )}`}
          </div>
          <div>
            {`Wind: ${detailsOfWeather.wind.speed} m/s`}
          </div>
        </>
      )}
      <Link
        to="/"
      >
        close
      </Link>
    </div>
  );
};

DetailsPage.propTypes = {
  city: PropTypes.string.isRequired,
};
