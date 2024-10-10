import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Counter from './Components/Counter/Counter';
import Title from './Components/Title/Title';
import Client from './Components/Clients/Client';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Counter />
      <Client />
      <Services />
    </div>
  );
};

export default App;
