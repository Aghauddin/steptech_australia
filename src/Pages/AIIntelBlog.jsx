import React from 'react';
import Banner from '../Components/AiblogComp/Banner'
import About from '../Components/AiblogComp/About'
import Services from '../Components/AiblogComp/Services';
import Portfolio from '../Components/AiblogComp/Portfolio';
import Contact from '../Components/LandingComp/Contact';
import Footer from '../Components/LandingComp/Footer';
import Navbar from '../Components/LandingComp/Navbar';


const Home = () => {
  return (
    <div className='bg-g-purple'>
    <div className='md:px-5 lg:px-10 xl:px-16'>
      <Navbar/>
      </div>
      <Banner/>
      <Portfolio/>
      <div className='md:px-20 lg:px-10 xl:px-16'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
