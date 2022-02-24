import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const Error = ({
  message,
}) => (
  <div className="error">
    <div className="card">
      <FontAwesomeIcon icon={faFaceFrown} />
      <p>{message}</p>
    </div>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
