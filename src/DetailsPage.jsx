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
    <div className="detailsPage">
      {detailsOfWeather && (
        <section className="detailsPage__card">
          <div className="detailsPage__main">
            <h2>{detailsOfWeather.name}</h2>
            <div>
              {detailsOfWeather.weather[0].main}
            </div>
            <div>
              {Math.round(detailsOfWeather.main.temp - 273.15)}
              &deg;C
            </div>
          </div>
          <div className="detailsPage__details">
            <div className="detailsPage__item">
              {`Feels: ${Math.round(
                detailsOfWeather.main.feels_like - 273.15,
              )}`}
              &deg;C
            </div>
            <div className="detailsPage__item">
              {`Min temp: ${Math.round(
                detailsOfWeather.main.temp_min - 273.15,
              )}`}
              &deg;C
            </div>
            <div className="detailsPage__item">
              {`Max temp: ${Math.round(
                detailsOfWeather.main.temp_max - 273.15,
              )}`}
              &deg;C
            </div>
            <div className="detailsPage__item">
              {`Wind: ${detailsOfWeather.wind.speed}m/s`}
            </div>
            <div className="detailsPage__item">
              {`Visibility: ${detailsOfWeather.visibility / 1000}km`}
            </div>
            <div className="detailsPage__item">
              {`Humidity: ${detailsOfWeather.main.humidity}%`}
            </div>
            <div className="detailsPage__item">
              {`Pressure: ${detailsOfWeather.main.pressure}gPa`}
            </div>
            <div className="detailsPage__item">
              {`Description: ${detailsOfWeather.weather[0].description}`}
            </div>
          </div>
          <Link
            className="detailsPage__button"
            to="/"
          />
        </section>
      )}
    </div>
  );
};

DetailsPage.propTypes = {
  city: PropTypes.string.isRequired,
};
