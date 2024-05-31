export default function Banner() {
  return (
<section className="relative mx-auto max-w-full sm:static sm:px-6 lg:px-0 mt-0">
<div>
  <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
    <div className="2xl:p-24 lg:my-20 2xl:my-80 p-8 lg:p-10 py-16">
      <h1 className="mx-auto mb-8 text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-none tracking-tighter text-white capitalize">
      Maximize the High Potential of <span className="text-[#D000E7]">Your Business</span>
      </h1>
      <p className="mx-auto text-base leading-relaxed text-white text-3xl lg:text-2xl sm:text-3xl 2xl:text-4xl">We are building your business. We go beyond the ordinary for our clients by offering unique, customized, and productive solutions.</p>
      <a href="/about-us" className="my-4 inline-block rounded-[25px] border border-white bg-transparent 2xl:text-xl px-8 py-3 text-center font-medium text-white hover:bg-gradient-to-r from-[#290069] to-[#D000E7] uppercase">
          read More </a>
    </div>
    <div className="hidden sm:block mt-0 md:-mt-32 lg:mt-0 2xl:mt-0">
    <img className="h-[450px] md:h-[550px] 2xl:h-[800px] object-cover object-center z-10 -mt-24 md:mt-5 ml-16 md:ml-10 2xl:ml-32 2xl:mt-32 rounded-full" src="https://i.ibb.co/pKjrdzb/image.png" alt=""/>
    <img src="https://i.ibb.co/x79TdG2/19350162796077-Converted-01-1-1.png" alt="banner-logo" 
    className="lg:h-full lg:w-full md:h-full -mt-103 md:-mt-130  2xl:-ml-8 2xl:-mt-112 z-20 object-cover object-center motion-safe:animate-pulse"/>
    </div>
  </div>
</div>
</section>
)}
