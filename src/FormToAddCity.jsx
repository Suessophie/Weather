import React from 'react';
import PropTypes from 'prop-types';

export const FormToAddCity = ({
  handleSubmit,
  addedCity,
  enteredCity,
}) => (
  <form
    onSubmit={handleSubmit}
  >
    <input
      name="city"
      value={addedCity}
      onChange={enteredCity}
      placeholder="City"
    />
    <button
      type="submit"
    >
      Find
    </button>
  </form>
);

FormToAddCity.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  addedCity: PropTypes.string.isRequired,
  enteredCity: PropTypes.func.isRequired,
};
