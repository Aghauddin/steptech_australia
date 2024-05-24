import React from 'react';
import Banner from '../Components/ArtificialComp/Banner'
import About from '../Components/ArtificialComp/About'
import Services from '../Components/ArtificialComp/Services';
import Portfolio from '../Components/ArtificialComp/Portfolio';
import Client from '../Components/ArtificialComp/Client';
import Contact from '../Components/LandingComp/Contact';
import Footer from '../Components/LandingComp/Footer';
import Navbar from '../Components/LandingComp/Navbar';


const Home = () => {
  return (
    <div className='bg-g-purple'>
      <div className='md:px-20 lg:px-10 xl:px-16'>
      <Navbar/>
      </div>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Client/>
      <Contact/>
      <div className='md:px-20 lg:px-10 xl:px-16'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
