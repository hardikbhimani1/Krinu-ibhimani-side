import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Project from './Components/Project/Project';
import Counter from './Components/Counter/Counter';
import Title from './Components/Title/Title';
import Client from './Components/Clients/Client';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Counter/>
      <Client/>
    </div>
  );
};

export default App;
