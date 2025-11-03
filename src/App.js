import React from 'react';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OrderSection />
      <Footer />
    </div>
  );
}

export default App;
