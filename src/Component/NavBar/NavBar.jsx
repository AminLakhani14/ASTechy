import React, { useState } from 'react';
import Button from './Button';
import DropDown from './DropDown';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <section>
        <nav className="navbar">
          <div to="/" className="logo">
            <i className="fas fa-home" /> Pro-Blog{' '}
          </div>

          <div className="menu-icon" onClick={changeClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>
            <li className="nav-items">
              <div to="/" className="nav-links" onClick={closeMobileMenu}>
                {' '}
                Home{' '}
              </div>
            </li>

            <li className="nav-items">
              <div className="nav-links" onClick={closeMobileMenu}>
                {' '}
                About{' '}
              </div>
            </li>

            <li
              className="nav-items"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="nav-links" onClick={closeMobileMenu}>
                {' '}
                Category <i className="fas fa-caret-down" />
                {dropdown && <DropDown />}
              </div>
            </li>

            <li className="nav-items">
              <div className="nav-links" onClick={closeMobileMenu}>
                {' '}
                Contact{' '}
              </div>
            </li>

            <li className="nav-items">
              <div className="nav-links-button" onClick={closeMobileMenu}>
                {' '}
                Sign Up{' '}
              </div>
            </li>
          </ul>

          <Button />
        </nav>
      </section>
    </>
  );
}

export default Navbar;
