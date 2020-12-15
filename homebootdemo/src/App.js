import React from 'react';
import './App.css';
import NavHeader from './components/NavHeader';
import Features from './components/Features';
import Works from './components/Works';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className="container">
        <NavHeader/>
       <Features/>
       <Works/>
       <OurTeam/>
       <Testimonials/>
       <Download/>
       <Footer/>
     </div>
     </div>
  );
}

export default App;
