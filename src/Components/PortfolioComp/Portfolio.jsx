import React, { useState } from 'react';

export default function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('webApp');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="flex justify-center items-center mt-0 md:mt-32">
      <div className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8 bg-g-purple 2xl:mt-24">
        <div className="flex justify-center items-center mb-20 md:mb-20 2xl:mt-24 tablet:mt-10 rounded-xl w-full">
          <button
            className={`-ml-0 md:mr-4 px-3 md:px-4 py-2 px-8 tablet:text-lg border-2 border-black dark:border-white uppercase bg-white text-indigo-950 transition duration-200 shadow-[1px_1px_rgba(0,225,0),2px_2px_rgba(0,0,225),3px_3px_rgba(225,0,0),4px_4px_rgba(0,225,0),5px_5px_0px_0px_rgba(0,0,225)] dark:shadow-[1px_1px_rgba(0,255,255),2px_2px_rgba(255,0,255),3px_3px_rgba(255,255,0),4px_4px_rgba(0,255,255),5px_5px_0px_0px_rgba(255,0,255)] text-[0.65rem] md:text-[0.85rem] lg:text-lg font-bold rounded-lg focus:outline-none ${
              activeTab === 'webApp' ? 'text-indigo-950' : ''
            }`}
            onClick={() => handleTabChange('webApp')}
          >
            Website
          </button>
          <button
            className={`md:mr-4 ml-2 lg:ml-10 px-3 md:px-4 py-2 tablet:text-lg border-2 border-black dark:border-white uppercase bg-white text-indigo-950 transition duration-200 shadow-[1px_1px_rgba(0,225,0),2px_2px_rgba(0,0,225),3px_3px_rgba(225,0,0),4px_4px_rgba(0,225,0),5px_5px_0px_0px_rgba(0,0,225)] dark:shadow-[1px_1px_rgba(0,255,255),2px_2px_rgba(255,0,255),3px_3px_rgba(255,255,0),4px_4px_rgba(0,255,255),5px_5px_0px_0px_rgba(255,0,255)] text-[0.65rem] md:text-[0.85rem] lg:text-lg font-bold rounded-lg focus:outline-none  ${
              activeTab === 'graphic' ? 'text-indigo-950' : ''
            }`}
            onClick={() => handleTabChange('graphic')}
          >
            Branding
          </button>
          <button
            className={`px-3 md:px-4 py-2 ml-2 lg:ml-10 tablet:text-lg border-2 border-black dark:border-white uppercase bg-white text-indigo-950 transition duration-200 shadow-[1px_1px_rgba(0,225,0),2px_2px_rgba(0,0,225),3px_3px_rgba(225,0,0),4px_4px_rgba(0,225,0),5px_5px_0px_0px_rgba(0,0,225)] dark:shadow-[1px_1px_rgba(0,255,255),2px_2px_rgba(255,0,255),3px_3px_rgba(255,255,0),4px_4px_rgba(0,255,255),5px_5px_0px_0px_rgba(255,0,255)] text-[0.65rem] md:text-[0.85rem] lg:text-lg font-bold rounded-lg focus:outline-none ${
              activeTab === 'app' ? 'text-indigo-950' : ''
            }`}
            onClick={() => handleTabChange('app')}
          >
            Mobile App
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
          {activeTab === 'webApp' ? (
            <>
            <div className="grid gap-8">
              <div className={`flex justify-center items-center overflow-hidden relative onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'webApp' ? 'block' : 'hidden'}`}>
          <img
          className="h-auto w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/7CLtZsw/Untitled-1.png"
          alt="gallery-photo"
            />
            <div className={`absolute inset-0 flex justify-center items-center transform translate-y-[17rem] tablet:translate-y-[36rem] 2xl:translate-y-8 md:translate-y-[16rem]  lg:translate-y-[34.5rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden  ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-96 top-28 md:top-24 lg:top-80 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-start items-start bg-white opacity-1 hover:opacity-100 transition-opacity  duration-300 hover:text-blue-500 hover:bg-white rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 1
               </h2>
             </div>
             </div>
            </div>
            <div className={`flex justify-center items-center overflow-hidden relative onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'webApp' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/Dr33W0z/image.png"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-5 2xl:translate-y-5 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 hover:text-blue-500 hover:bg-white rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 2
               </h2>
             </div>
             </div>
            </div>
            <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'webApp' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/YfsN7MC/image.png"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-5 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 3
               </h2>
             </div>
             </div>
            </div>
            <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'webApp' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/tHPsLry/web-2.png"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-[26rem] tablet:translate-y-[54.7rem] 2xl:translate-y-6 md:translate-y-[24.3rem] lg:translate-y-[52.3rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start  ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-[40rem] top-44 md:top-56 lg:top-100 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 4
               </h2>
             </div>
             </div>
            </div>
          </div>


          <div className="grid gap-8">
          <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'webApp' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/2MPpYBg/image.png"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-5 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 5
               </h2>
             </div>
             </div>
            </div>
            <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'webApp' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/jgrG9J8/image.png"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-5 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white  opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 6
               </h2>
             </div>
             </div>
            </div>
            <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'webApp' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/bWjQTnT/web.png"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-[26rem] tablet:translate-y-[54.7rem] 2xl:translate-y-6 md:translate-y-[24.3rem] lg:translate-y-[52.3rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-[40rem] top-44 md:top-56 lg:top-100 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 shadow-sm shadow-white  transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
            <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 7
               </h2>
             </div>
            </div>
            </div>
            <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'webApp' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/b6ZgFQt/Untitled-2.png"
                alt="gallery-photo"
              />
              <div className={`absolute  inset-0 flex justify-center items-center transform translate-y-[17rem] tablet:translate-y-[36rem] 2xl:translate-y-8 md:translate-y-[16rem] lg:translate-y-[34.5rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-96 top-28 md:top-24 lg:top-80 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 shadow-sm shadow-white transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent  bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 8
               </h2>
             </div>
             </div>
            </div>            
          </div>
          </>
          ) : activeTab === 'graphic' ?(
            <>
            <div className="grid gap-8">
              <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'graphic' ? 'block' : 'hidden'}`}>
          <img
          className="h-auto w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/6gQQJnW/gra.png"
          alt="gallery-photo"
            />
            <div className={`absolute inset-0 flex justify-center items-center transform translate-y-[17rem] tablet:translate-y-[36rem] 2xl:translate-y-4 md:translate-y-[16rem] lg:translate-y-[34.5rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-96 top-28 md:top-24 lg:top-80 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 hover:text-blue-500 hover:bg-white rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 1
               </h2>
             </div>
             </div>
            </div>
            <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'graphic' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/Npbhmg7/gra.jpg"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-9 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 hover:text-blue-500 hover:bg-white rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 2
               </h2>
             </div>
             </div>
            </div>
            <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'graphic' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/6YGtQph/gra2.jpg"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-9 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 3
               </h2>
             </div>
             </div>
            </div>
            <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'graphic' ? 'block' : 'hidden'}`}>
              <img
                className="h-auto w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/74f5kh1/5-1.jpg"
                alt="gallery-photo"
              />
              <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-[26rem] tablet:translate-y-[54.7rem] 2xl:translate-y-7 md:translate-y-[24.3rem] lg:translate-y-[52.3rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
            <div className="text-start ml-40 md:ml-24 lg:ml-0">
            <h2 className="text-xl font-bold">Title</h2>
            <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </div>
            </div>
            <div className={`absolute tablet:top-[40rem] top-44 md:top-56 lg:top-100 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
             <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
             <h2 className="text-[1rem] font-bold">
               Project 4
               </h2>
             </div>
             </div>
            </div>
          </div>

<div className="grid gap-8">
<div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'graphic' ? 'block' : 'hidden'}`}>
    <img
      className="h-auto w-full rounded-lg object-cover object-center"
      src="https://i.ibb.co/j89syVR/Stationery-Mockup003.jpg"
      alt="gallery-photo"
    />
    <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-9 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
  <div className="text-start ml-40 md:ml-24 lg:ml-0">
  <h2 className="text-xl font-bold">Title</h2>
  <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  </div>
  </div>
  <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
   <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
   <h2 className="text-[1rem] font-bold">
     Project 5
     </h2>
   </div>
   </div>
  </div>
  <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'graphic' ? 'block' : 'hidden'}`}>
    <img
      className="h-auto w-full rounded-lg object-cover object-center"
      src="https://i.ibb.co/JjPDJW5/image.png"
      alt="gallery-photo"
    />
    <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-9 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
  <div className="text-start ml-40 md:ml-24 lg:ml-0">
  <h2 className="text-xl font-bold">Title</h2>
  <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  </div>
  </div>
  <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white  opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
   <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
   <h2 className="text-[1rem] font-bold">
     Project 6
     </h2>
   </div>
   </div>
  </div>
  <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'graphic' ? 'block' : 'hidden'}`}>
    <img
      className="h-auto w-full rounded-lg object-cover object-center"
      src="https://i.ibb.co/Nmddmq0/5-12.jpg"
      alt="gallery-photo"
    />
    <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-[26rem] tablet:translate-y-[54.7rem] 2xl:translate-y-7 md:translate-y-[24.3rem] lg:translate-y-[52.3rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
  <div className="text-start ml-40 md:ml-24 lg:ml-0">
  <h2 className="text-xl font-bold">Title</h2>
  <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  </div>
  </div>
  <div className={`absolute tablet:top-[40rem] top-44 md:top-56 lg:top-100 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 shadow-sm shadow-white  transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
  <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
   <h2 className="text-[1rem] font-bold">
     Project 7
     </h2>
   </div>
  </div>
  </div>
  <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'graphic' ? 'block' : 'hidden'}`}>
    <img
      className="h-auto w-full rounded-lg object-cover object-center"
      src="https://i.ibb.co/SJHK7CK/grap-2.png"
      alt="gallery-photo"
    />
    <div className={`absolute  inset-0 flex justify-center items-center transform translate-y-[17rem] tablet:translate-y-[36rem] 2xl:translate-y-4 md:translate-y-[16rem] lg:translate-y-[34.5rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
  <div className="text-start ml-40 md:ml-24 lg:ml-0">
  <h2 className="text-xl font-bold">Title</h2>
  <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  </div>
  </div>
  <div className={`absolute tablet:top-96 top-28 md:top-24 lg:top-80 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 shadow-sm shadow-white transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
   <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent  bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
   <h2 className="text-[1rem] font-bold">
     Project 8
     </h2>
   </div>
   </div>
  </div>            
</div>
</>
) : (
  <>
  <div className="grid gap-8">
    <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'app' ? 'block' : 'hidden'}`}>
<img
className="h-auto w-full rounded-lg object-cover object-center"
src="https://i.ibb.co/z8zPDm7/Untitle.png"
alt="gallery-photo"
  />
  <div className={`absolute  inset-0 flex justify-center items-center transform translate-y-[17rem] tablet:translate-y-[36rem] 2xl:translate-y-8 md:translate-y-[16rem] lg:translate-y-[34.5rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
  <div className="text-start ml-40 md:ml-24 lg:ml-0">
  <h2 className="text-xl font-bold">Title</h2>
  <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  </div>
  </div>
  <div className={`absolute tablet:top-96 top-28 md:top-24 lg:top-80 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 hover:text-blue-500 hover:bg-white rounded-tr-xl rounded-tl-xl`}>
   <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
   <h2 className="text-[1rem] font-bold">
     Project 1
     </h2>
   </div>
   </div>
  </div>
  <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'app' ? 'block' : 'hidden'}`}>
    <img
      className="h-auto w-full rounded-lg object-cover object-center"
      src="https://i.ibb.co/kDYfwKc/3.png"
      alt="gallery-photo"
    />
    <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-5 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
  <div className="text-start ml-40 md:ml-24 lg:ml-0">
  <h2 className="text-xl font-bold">Title</h2>
  <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  </div>
  </div>
  <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 hover:text-blue-500 hover:bg-white rounded-tr-xl rounded-tl-xl`}>
   <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
   <h2 className="text-[1rem] font-bold">
     Project 2
     </h2>
   </div>
   </div>
  </div>
  <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'app' ? 'block' : 'hidden'}`}>
    <img
      className="h-auto w-full rounded-lg object-cover object-center"
      src="https://i.ibb.co/pnWg0Gt/8.jpg"
      alt="gallery-photo"
    />
    <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-5 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
  <div className="text-start ml-40 md:ml-24 lg:ml-0">
  <h2 className="text-xl font-bold">Title</h2>
  <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  </div>
  </div>
  <div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
   <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
   <h2 className="text-[1rem] font-bold">
     Project 3
     </h2>
   </div>
   </div>
  </div>
  <div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'app' ? 'block' : 'hidden'}`}>
    <img
      className="h-auto w-full rounded-lg object-cover object-center"
      src="https://i.ibb.co/gwjs654/3.png"
      alt="gallery-photo"
    />
    <div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-[26rem] tablet:translate-y-[54.7rem] 2xl:translate-y-6 md:translate-y-[24.3rem] lg:translate-y-[52.3rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
  <div className="text-start ml-40 md:ml-24 lg:ml-0">
  <h2 className="text-xl font-bold">Title</h2>
  <span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
  </div>
  </div>
  <div className={`absolute tablet:top-[40rem] top-44 md:top-56 lg:top-100 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
   <div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
   <h2 className="text-[1rem] font-bold">
     Project 4
     </h2>
   </div>
   </div>
  </div>
</div>

<div className="grid gap-8">
<div className={`flex justify-center items-center relative  overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'app' ? 'block' : 'hidden'}`}>
<img
className="h-auto w-full rounded-lg object-cover object-center"
src="https://i.ibb.co/F3t59gz/7.jpg"
alt="gallery-photo"
/>
<div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-5 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
<div className="text-start ml-40 md:ml-24 lg:ml-0">
<h2 className="text-xl font-bold">Title</h2>
<span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
<path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
</div>
</div>
<div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-36 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
<div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
<h2 className="text-[1rem] font-bold">
Project 5
</h2>
</div>
</div>
</div>
<div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'app' ? 'block' : 'hidden'}`}>
<img
className="h-auto w-full rounded-lg object-cover object-center"
src="https://i.ibb.co/MVzktr3/image.png"
alt="gallery-photo"
/>
<div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-44 tablet:translate-y-[23.8rem] 2xl:translate-y-5 md:translate-y-[10.5rem] lg:translate-y-[22.9rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
<div className="text-start ml-40 md:ml-24 lg:ml-0">
<h2 className="text-xl font-bold">Title</h2>
<span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
<path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
</div>
</div>
<div className={`absolute tablet:top-56 top-16 md:top-16 lg:top-28 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white  opacity-1 hover:opacity-100 transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
<div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
<h2 className="text-[1rem] font-bold">
Project 6
</h2>
</div>
</div>
</div>
<div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'app' ? 'block' : 'hidden'}`}>
<img
className="h-auto w-full rounded-lg object-cover object-center"
src="https://i.ibb.co/TWfQn3m/image.png"
alt="gallery-photo"
/>
<div className={`absolute inset-0 flex flex-col justify-center items-center transform translate-y-[26rem] tablet:translate-y-[54.7rem] 2xl:translate-y-6 md:translate-y-[24.3rem] lg:translate-y-[52.3rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
<div className="text-start ml-40 md:ml-24 lg:ml-0">
<h2 className="text-xl font-bold">Title</h2>
<span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
<path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
</div>
</div>
<div className={`absolute tablet:top-[40rem] top-44 md:top-56 lg:top-100 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 shadow-sm shadow-white  transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
<div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
<h2 className="text-[1rem] font-bold">
Project 7
</h2>
</div>
</div>
</div>
<div className={`flex justify-center items-center relative overflow-hidden onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) ${activeTab === 'app' ? 'block' : 'hidden'}`}>
<img
className="h-auto w-full rounded-lg object-cover object-center"
src="https://i.ibb.co/2n2vP1x/Un.png"
alt="gallery-photo"
/>
<div className={`absolute inset-0 flex justify-center items-center transform translate-y-[17rem] tablet:translate-y-[36rem] 2xl:translate-y-8 md:translate-y-[16rem] lg:translate-y-[34.5rem] hover:translate-y-0 transition delay-300 ease-in-out duration-300 bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-opacity-50 text-white rounded-tl-[5rem] overflow-hidden ${isHovered ? 'hovered' : ''}`}>
<div className="text-start ml-40 md:ml-24 lg:ml-0">
<h2 className="text-xl font-bold">Title</h2>
<span className="-ml-4 font-bold mt-4 px-4 py-2 text-white rounded-lg">Read More</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 inline-flex justify-start items-start mr-4 md:-mt-1">
<path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
</div>
</div>
<div className={`absolute tablet:top-96 top-28 md:top-24 lg:top-80 left-20 md:left-10 lg:left-20 right-50 bottom-0 flex justify-center items-center bg-white opacity-1 hover:opacity-100 shadow-sm shadow-white transition-opacity duration-300 rounded-tr-xl rounded-tl-xl`}>
<div className="flex flex-col justify-center items-center h-full -rotate-90 text-transparent  bg-gradient-to-r from-[#D000E7] via-[#6100F8] to-[#6100F8] bg-clip-text">
<h2 className="text-[1rem] font-bold">
Project 8
</h2>
</div>
</div>
</div>            
</div>
</>             
)}
        </div>
      </div>
    </section>
  );
}
