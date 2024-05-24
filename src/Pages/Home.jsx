import React from 'react';
import Banner from '../Components/LandingComp/Banner'
import About from '../Components/LandingComp/About'
import Services from '../Components/LandingComp/Services';
import Portfolio from '../Components/LandingComp/Portfolio';
import Client from '../Components/LandingComp/Client';
import Contact from '../Components/LandingComp/Contact';
import Footer from '../Components/LandingComp/Footer';
import Navbar from '../Components/LandingComp/Navbar';


const Home = () => {
  return (
    <div className='md:px-20 lg:px-10 xl:px-16 bg-g-purple'>
      <div className='bg-transparent'>
      <Navbar/>
      </div>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Client/>
      <Contact/>
      <div className='shadow-xl'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
