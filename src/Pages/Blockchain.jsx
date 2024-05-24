import React from 'react';
import Banner from '../Components/BlockchainDevComp/Banner'
import About from '../Components/BlockchainDevComp/About'
import Services from '../Components/BlockchainDevComp/Services';
import Portfolio from '../Components/BlockchainDevComp/Portfolio';
import Client from '../Components/BlockchainDevComp/Client';
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
