import React from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link для переходів
import './MenuItem.css';

const MenuItem = ({ title, link }) => {
  return (
    <li className="menu-item">
      <Link to={link}>{title}</Link> {/* Використовуємо Link для переходів */}
    </li>
  );
};

export default MenuItem;
