import React from 'react';
import PropTypes from 'prop-types';

import './FormToAddCity.scss';

export const FormToAddCity = ({
  hasErrorOnInput,
  alreadyAdded,
  enteredCity,
  handleSubmit,
  valueOfEnteredCity,
}) => (
  <form
    className="form"
    onSubmit={handleSubmit}
  >
    <label
      className="form__label"
      htmlFor="city"
    >
      To find new city
    </label>
    <input
      className="form__input"
      id="city"
      name="city"
      value={valueOfEnteredCity}
      onChange={enteredCity}
      placeholder="Name of the city"
    />
    {hasErrorOnInput && (
      <div className="form__error">
        Please, enter correct city
      </div>
    )}
    {alreadyAdded && (
      <div className="form__error">
        Sorry, this city already added
      </div>
    )}
    <button
      className="form__button"
      type="submit"
    >
      Find
    </button>
  </form>
);

FormToAddCity.propTypes = {
  hasErrorOnInput: PropTypes.bool.isRequired,
  alreadyAdded: PropTypes.bool.isRequired,
  enteredCity: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  valueOfEnteredCity: PropTypes.string.isRequired,
};
