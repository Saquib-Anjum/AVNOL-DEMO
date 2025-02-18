import React from 'react';
import Navbar from './components/Navbar';  
import About from './components/About'
import Hero from './components/Hero';  
import Research_and_innovation from './components/Research_and_Innovation';  
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Products_and_Services from './components/Products_and_Services'
import TestimonialSection from './components/TestimonialSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
      <Research_and_innovation />
      <Products_and_Services/>
      <TestimonialSection />
      <Contact />
      <Footer  />
    </div>
  );
}




export default App;
