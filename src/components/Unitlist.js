import React from 'react';
import PropTypes from 'prop-types';

// Route関連
import { Link } from 'react-router-dom'

const UnitItem = ({name}) => (
  <div>{name}</div>
);

UnitItem.propTypes = {
  name: PropTypes.string
};


export default UnitItem;