export default function About() {
  return (
<section className="max-w-full px-4 bg-g-purple">
<div>
  <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 mt-32 md:mt-0 2xl:mt-44">
    <div className="-mt-24 md:mt-28">
    <div className="inline-flex items-center justify-center flex-shrink-0 md:h-full h-[300px] lg:h-[400px] w-full mb-5 bg-transparent rounded-xl">
        <img className="h-[320px] md:h-[350px] lg:h-[520px] object-cover object-center z-10 mt-16 ml-1 md:ml-20 lg:-ml-32" src="https://i.ibb.co/pKjrdzb/image.png"  alt="" />     
        <img className='h-[240px] md:h-full lg:h-full object-cover object-center -ml-72 md:-ml-121 z-40' src='https://i.ibb.co/xYQsYg6/Group-4-1.png' alt=''/>
      </div>
    </div>
    <div className="p-10 flex flex-col justify-center items-center">
      <h2 className="p-5 -ml-4 md:-ml-8 lg:-ml-5 text-4xl md:text-[2.3rem] lg:text-5xl 2xl:text-5xl font-bold leading-none tracking-tighter capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#A6A6DF]">
      We Build Digital Excellence
      </h2>
      <p className="mt-0 md:mt-6 lg:mt-0 text-base leading-relaxed text-xl md:text-lg text-white">We are a group of dreamers, creators, and thinkers dedicated to transforming the digital world. Every line of code word we produce, each UI we produce, and each strategy we use is infused with a commitment to excellence and a sense of originality. Follow along with us while we keep pushing boundaries to create a product that not only works but also accurately represents your brand's unique character.</p>
    </div>
  </div>
</div>
</section> 
)
}
