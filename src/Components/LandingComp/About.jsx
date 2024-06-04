import { BackgroundGradientAnimation } from "../../ui/background-gradient";
export default function About() {
  return (
<section className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8">
<div>
  <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
    <div className="mt-24">
    <BackgroundGradientAnimation>
    <div className="flex items-center justify-center text-white px-10 pointer-events-none z-50 inset-0 mt-0">
        <img className='h-full lg:h-full object-cover object-center z-40 mt-10' src='https://i.ibb.co/xYQsYg6/Group-4-1.png' alt=''/>
      </div>
      </BackgroundGradientAnimation>
    </div>
    <div className="p-2 lg:my-10 2xl:my-44 sm:my-0">
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
