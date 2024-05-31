export default function Banner() {
    return (
<section className="relative mx-auto max-w-full sm:static sm:px-6 lg:px-0 bg-g-purple">
  <div>
    <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2 mt-10">
      <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="mx-auto mb-8 text-[2.7rem] lg:text-6xl  2xl:text-7xl font-bold leading-none tracking-tighter text-white">
        Hello To  Your Business Growth With Our <span className="text-[#D000E7]">E-Commerce Development Services</span>
        </h1>
        <p className="mx-auto text-base leading-relaxed text-white text-3xl lg:text-2xl sm:text-3xl 2xl:text-4xl">Are you searching to untie the highest potential of your <b>e-commerce</b> business? At Step Tech, an <b>e-commerce development agency</b>, we’re here to make your business stand at the cutting edge of digital advancement and creativity</p>
      </div>
      <div className="hidden sm:block bg-gradient-to-b from-[#E920FF] via-[#9302DA] to-[#6100F8] rounded-l-[5rem] h-98 mt-0 md:mt-8 overflow-hidden">
     <img src="https://i.ibb.co/ydQzQw9/add-cart-buy-now-online-commerce-graphic-concept.jpg" alt="banner-logo"
      className="lg:h-full lg:w-full md:h-full h-full object-cover object-center 2xl:-mt-10 rounded-tl-[5rem] rounded-bl-[4.5rem] mx-2 overflow-hidden"
      />
      </div>
    </div>
  </div>
</section>
    )}
