import React from 'react';
import logoImage from './logo.png'; 
import './Logo.css';

const Logo = () => {
  return <img className="logo-image" src={logoImage} alt="Logo" />;
};

export default Logo;