import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const ToggleIcon = ({ menuRef }) => {
  const openIconRef = useRef();
  const closeIconRef = useRef();
  const toggleMenu = () => {
    menuRef.current.classList.toggle('open');
    openIconRef.current.classList.toggle('d-none');
    closeIconRef.current.classList.toggle('d-none');
  };

  return (
    <button type="button" onClick={toggleMenu} className="btn toggle-btn">
      <span ref={openIconRef}>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <span className="d-none" ref={closeIconRef}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </button>
  );
};

ToggleIcon.propTypes = {
  menuRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default ToggleIcon;
