import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Counter from './Components/Counter/Counter';
import Title from './Components/Title/Title';
import Client from './Components/Clients/Client';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Project from './Components/Project/Project';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Counter />
      <Client />
      <Services />
      <Project />
    </div>
  );
};

export default App;
