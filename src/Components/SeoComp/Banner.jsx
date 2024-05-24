export default function Banner() {
    return (
<section className="relative mx-auto max-w-full sm:static sm:px-6 lg:px-0 bg-g-purple">
  <div>
    <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2 mt-10">
      <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="mx-auto mb-8 text-5xl lg:text-6xl  2xl:text-7xl font-bold leading-none tracking-tighter text-white">
        Make Your Website Spark With Our Best Quality <span className="text-[#D000E7]">SEO Service</span> In Australia </h1>
        <p className="mx-auto text-base leading-relaxed text-white text-3xl lg:text-2xl sm:text-3xl 2xl:text-4xl">At Step Tech <b>SEO agency</b>, we offer our clients the best <b>search engine optimization</b> services, allowing businesses to gain higher rankings, 100% organic traffic growth, and essential investment returns</p>
      </div>
      <div className="hidden sm:block bg-gradient-to-b from-[#E920FF] via-[#9302DA] to-[#6100F8] rounded-l-[5rem] h-98 overflow-hidden">
     <img src="https://i.ibb.co/v47t4t6/3.jpg" alt="banner-logo"
      className="lg:h-full lg:w-full md:h-full h-full object-cover object-center 2xl:-mt-10 rounded-tl-[5rem] rounded-bl-[4.5rem] mx-2 overflow-hidden"
      />
      </div>
    </div>
  </div>
</section>
    )}
