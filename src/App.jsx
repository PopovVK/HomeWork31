import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Description from './components/Description/Description';
import Logo from './components/Logo/Logo';
import './App.css';

const Home = () => <div>Home Page</div>;
const About = () => <div>
  <div class="About">Майстер з Дніпра, що захотів навчитися писати сайти!;)</div>
  </div>
const Contact = () => <div>
  <div class="Contact">Звертатися можна за посиланням в <a href="https://www.instagram.com/west.avenue.ua/">instagram</a></div>
  </div>;
const Material = () => <div class="Material">Світлини будуть незабаром</div>;

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/material" element={<Material />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;