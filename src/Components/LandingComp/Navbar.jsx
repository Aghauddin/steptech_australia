import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="">
      <div className="w-full flex flex-wrap items-center justify-between p-4 relative z-20 bg-transparent">
        <a href="/">
          <img className="h-16 w-auto" src="https://i.ibb.co/sK6v4j6/logo-05-1.png" alt="Company Logo" />
        </a>
        <div className='md:hidden'>
        <button
          id="navbar-toggle"
          onClick={toggleMenu}
          className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 ml-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        </div>
        <div className={`w-full md:block md:w-auto ml-0 md:-ml-[0.5rem] ${isMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col justify-center items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 lg:space-x-12 md:border-0">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-xl md:text-xl lg:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 focus:text-blue-700 active:text-blue-700"  aria-current="page">Home</a>
            </li>
            <li>
              <a href="/about-us" className="block py-2 pl-3 pr-4 text-xl md:text-xl lg:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 focus:text-blue-700 active:text-blue-700" >About Us</a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 pl-16 md:pl-3 pr-16 text-xl md:text-xl lg:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 active:text-blue-700" 
              >
                Services
                <svg
                  className="w-3.5 h-3.5 ml-2 md:ml-2.5 mt-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              
              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className={`md:absolute z-30 ${isDropdownOpen ? '' : 'hidden'} font-normal md:font-bold text-black rounded-lg shadow w-56 md:w-104 lg:w-102 2xl:w-103 flex justify-center items-center ml-0 mt-0 md:-ml-64 lg:-ml-96 2xl:-ml-110 md:mt-3 p-3 bg-[#EDEDFF]`}
              >
                <ul className="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                <div className='grid md:grid-cols-4 sm:grid-cols-1'>
                  <li>
                    <a href="/web-design-&-development" className="block px-4 py-2 hover:bg-black-100 hover:bg-black-600 hover:bg-gradient-to-r from-[#D000E7] to-[#290069] text-black text-md md:text-lg 2xl:text-xl ">Web Development & Design</a>
                    <span className='px-4 py-2 text-gray-700 md:text-md 2xl:text-lg hidden md:block capitalize'>Web design and development is to transform the brand game.</span>
                  </li>
                  <li>
                    <a href="/graphic-designing" className="block px-4 py-2 hover:bg-gradient-to-r from-[#D000E7] to-[#290069] text-black text-md md:text-lg 2xl:text-xl ">Graphic Designing</a>
                    <span className='px-4 py-2 text-gray-700 md:text-md 2xl:text-lg hidden md:block capitalize'>Step Up Your Brand with Graphic Designing.</span>
                  </li>
                  <li>
                    <a href="/mobile-app-design-&-development" className="block px-4 py-2 hover:bg-gradient-to-r from-[#D000E7] to-[#290069] text-black text-md md:text-lg 2xl:text-xl ">Mobile App UI/UX Design & Development</a>
                    <span className='px-4 py-2 text-gray-700 md:text-md 2xl:text-lg hidden md:block capitalize'>Stunning UI/UX for happy users.</span>
                  </li>
                  <li>
                    <a href="/blockchain-development" className="block px-4 py-2 hover:bg-gradient-to-r from-[#D000E7] to-[#290069] text-black text-md md:text-lg 2xl:text-xl">Blockchain Development</a>
                    <span className='px-4 py-2 text-gray-700 md:text-md 2xl:text-lg hidden md:block capitalize'>Blockchain Security & Freedom. Build Your Future.</span>
                  </li>
                  <li>
                    <a href="/search-enigne-optimization" className="block px-4 py-2 hover:bg-gradient-to-r from-[#D000E7] to-[#290069] text-black text-md md:text-lg 2xl:text-xl">Search Engine Optimization</a>
                    <span className='px-4 py-2 text-gray-700 md:text-md 2xl:text-lg hidden md:block capitalize'>Attract more customers. Grow your business.</span>
                  </li>
                  <li>
                    <a href="/ecommerce" className="block px-4 py-2 hover:bg-gradient-to-r from-[#D000E7] to-[#290069] text-black text-md md:text-lg 2xl:text-xl">E-commerce</a>
                    <span className='px-4 py-2 text-gray-700 md:text-md 2xl:text-lg hidden md:block capitalize'>Global eCommerce. Design, Build, Profit.</span>
                  </li>
                  <li>
                    <a href="/nft" className="block px-4 py-2 hover:bg-gradient-to-r from-[#D000E7] to-[#290069] text-black text-md md:text-lg 2xl:text-xl ">NFT- Marketplace Development</a>
                    <span className='px-4 py-2 text-gray-700 md:text-md 2xl:text-lg hidden md:block capitalize'>Step Up Your NFT Game. Australia's Fastest Marketplace.</span>
                  </li>
                  <li>
                    <a href="/artificial-intelligence" className="block px-4 py-2 hover:bg-gradient-to-r from-[#D000E7] to-[#290069] text-black text-md md:text-lg 2xl:text-xl ">Artificial Intelligence</a>
                    <span className='px-4 py-2 text-gray-700 md:text-md 2xl:text-lg hidden md:block capitalize'>AI Made Easy. Step Tech AU Boosts Efficiency.</span>
                  </li>
                  </div>
                </ul>
              </div>
            </li>
            <li>
              <a href="/portfolio" className="block py-2 pl-3 pr-4 text-xl md:text-xl lg:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 focus:text-blue-700 active:text-blue-700">Portfolio</a>
            </li>
            <li>
              <a href="/blog" className="block py-2 pl-3 pr-4 text-xl md:text-xl lg:text-2xl 2xl:text-4xl rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 focus:text-blue-700 active:text-blue-700">Blog</a>
            </li>
          </ul>
          
        </div>
        <div className="flex justify-end items-end  space-x-3 hidden md:block">
                <button
                  type="button"
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#D000E7] bg-[linear-gradient(110deg,#000103,45%,#D000E7,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D000E7] focus:ring-offset-2 focus:ring-offset-slate-50">
                  Let's Contact
                </button>
                <button
                  type="button"
                  className="bg-gradient-to-r from-[#290069] to-[#D000E7] p-3.5 rounded text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                  <a href="tel:+61410025346">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  </a>
                </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
