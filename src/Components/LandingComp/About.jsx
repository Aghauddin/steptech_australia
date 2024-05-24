export default function About() {
  return (
<section className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8">
<div>
  <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
    <div className="mt-28">
    <div className="inline-flex items-center justify-center flex-shrink-0 md:h-full h-[300px] lg:h-[400px] w-full mx-auto mb-5 bg-transparent rounded-xl">
        <img className="h-[300px] md:h-[520px] object-cover object-center z-10 mt-16 -ml-5 md:-ml-32" src="https://i.ibb.co/pKjrdzb/image.png"  alt="" />     
        <img className='h-full lg:h-full object-cover object-center -ml-72 md:-ml-121 z-40' src='https://i.ibb.co/xYQsYg6/Group-4-1.png' alt=''/>
      </div>
    </div>
    <div className="p-2 lg:my-10 sm:my-0">
      <h2 className="mx-auto mb-8 text-4xl lg:text-4xl sm:text-6xl 2xl:text-5xl font-bold leading-none tracking-tighter capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#A6A6DF] via-[#FFFFFF] to-[#FFFFFF]">
          about us
      </h2>
      <h2 className="mx-auto mb-8 text-4xl lg:text-5xl 2xl:text-5xl font-bold leading-none tracking-tighter capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#A6A6DF]">
      Crafting a Stunning Digital Experience For Your Business
      </h2>
      <p className="mx-auto text-base leading-relaxed text-xl sm:text-2xl lg:text-2xl 2xl:text-2xl text-white">We are a global, award-winning web development company that delivers excellent digital marketing, game development, web development, and app development solutions. We have a team of prime industry pros who are always working to meet your needs for customized web apps, games, and solutions. We don't just offer solutions for your brand; we build a business to help you thrive in your competitive market.</p>
    </div>
  </div>
</div>
</section>
)
}
