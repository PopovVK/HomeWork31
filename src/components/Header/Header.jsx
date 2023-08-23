import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="menu">
        <MenuItem title="Home" />
        <MenuItem title="About" />
        <MenuItem title="Contact" />
        <MenuItem title="Material" />
      </nav>
    </header>
  );
};

export default Header;
