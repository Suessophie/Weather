import PropTypes from 'prop-types';

export const CityShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  main: PropTypes.shape({
    temp: PropTypes.number.isRequired,
  }).isRequired,
  weather: PropTypes.arrayOf(PropTypes.shape({
    main: PropTypes.string.isRequired,
  }).isRequired).isRequired,
});
