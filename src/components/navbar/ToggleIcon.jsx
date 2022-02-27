import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

let menu;
let openIcon;
let closeIcon;
export const toggleMenu = () => {
  menu.current.classList.toggle('open');
  openIcon.current.classList.toggle('d-none');
  closeIcon.current.classList.toggle('d-none');
};

const ToggleIcon = ({ menuRef }) => {
  const openIconRef = useRef();
  const closeIconRef = useRef();
  menu = menuRef;
  openIcon = openIconRef;
  closeIcon = closeIconRef;
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="btn toggle-btn"
    >
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
