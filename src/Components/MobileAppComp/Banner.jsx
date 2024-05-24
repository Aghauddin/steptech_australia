export default function Banner() {
    return (
<section className="relative mx-auto max-w-full sm:static sm:px-6 lg:px-0 bg-g-purple">
  <div>
    <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2 mt-10">
      <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="mx-auto mb-8 text-5xl lg:text-6xl  2xl:text-7xl font-bold leading-none tracking-tighter text-white">
        Bring Life to Your Digital Dream With Our <span className="text-[#D000E7]">App Development UI/UX Service</span>
        </h1>
        <p className="mx-auto text-base leading-relaxed text-white text-3xl lg:text-2xl sm:text-3xl 2xl:text-4xl">Be ready to maximize the potential of your business and transform your idea into digital reality with Step Tech, <b>a top app development company</b>, where our designers offer a pleasing user interface (UI) and an easy, simple UX to ensure change, interaction, and easy use</p>
      </div>
      <div className="hidden sm:block bg-gradient-to-b from-[#E920FF] via-[#9302DA] to-[#6100F8] rounded-l-[5rem] mt-0 md:mt-16 h-98 overflow-hidden flex justify-center items-center">
     <img src="https://i.ibb.co/qFTbvtN/6.jpg" alt="banner-logo"
      className="lg:h-full lg:w-full md:h-full h-full object-cover object-center rounded-tl-[5rem] rounded-bl-[4.5rem] mx-2 overflow-hidden"
      />
      </div>
    </div>
  </div>
</section>
    )}
