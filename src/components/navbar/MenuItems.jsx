import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuItems = React.forwardRef((props, ref) => {
  const categories = useSelector((state) => state.categories);

  return (
    <ul className="menu-items unstyled-list flex" ref={ref}>
      {
        categories.map((cat, i) => {
          if (i === 0) {
            return (
              <li key={cat.name}>
                <NavLink
                  to="/"
                  activeclassname="active"
                >
                  {cat.name}
                </NavLink>
              </li>
            );
          }
          return (
            <li key={cat.name}>
              <NavLink
                to={cat.name}
                activeclassname="active"
              >
                {cat.name}
              </NavLink>
            </li>
          );
        })
      }
    </ul>
  );
});

MenuItems.displayName = 'MenuItems';
export default MenuItems;
