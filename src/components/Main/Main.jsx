import React from 'react';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Description text="Це сайт для підготовки до співбесіди на позицію фронтенд!" />
      <Logo />
    </main>
  );
};

export default Main;
