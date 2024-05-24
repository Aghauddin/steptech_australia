export default function Banner() {
    return (
<section className="relative mx-auto max-w-full sm:static sm:px-6 lg:px-0 bg-g-purple mt-0">
  <div>
    <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2 mt-10">
      <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="mx-auto mb-8 text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-none tracking-tighter text-white">
        Embrace The Beauty Of Creativity With Our <span className="text-[#D000E7]">Design Services</span>
        </h1>
        <p className="mx-auto text-base leading-relaxed text-white text-3xl lg:text-2xl sm:text-3xl 2xl:text-4xl">At Step Tech AU, the <b>best logo design company</b>, our skillful <b>graphic designers</b> worldwide will make it happen for you. With our <b>best logo designers</b>, we can build the best design, <b>creative logo design</b>, <b>vector illustration</b>, etc, for start-ups or well-established ventures to accomplish their goals</p>
      </div>
      <div className="hidden sm:block bg-gradient-to-b from-[#E920FF] via-[#9302DA] to-[#6100F8] rounded-l-[5rem] h-98  mt-0 md:mt-5 overflow-hidden flex justify-center items-center">
     <img src="https://i.ibb.co/FBPhnyP/5.jpg" alt="banner-logo"
      className="lg:h-full lg:w-full md:h-full h-full object-cover object-center rounded-tl-[5rem] rounded-bl-[4.5rem] mx-2 overflow-hidden"
      />
      </div>
    </div>
  </div>
</section>
    )}
