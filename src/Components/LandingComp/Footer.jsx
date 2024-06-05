export default function Footer() {
    return (
<footer className="bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
  <div className="relative mx-auto max-w-full px-0 sm:static sm:px-6 lg:px-0 pb-5">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center text-white sm:justify-start ml-0 md:ml-0 lg:ml-16">
        <img className="h-full w-auto" src="https://i.ibb.co/sK6v4j6/logo-05-1.png"alt="Company"/>
        </div>
        <p className="mt-6 max-w-xl text-center leading-relaxed text-white text-lg sm:max-w-xs sm:text-left 2xl:text-2xl">
        Take your business higher than ever of accomplishment with our unrivaled administrations.
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <a
              href="https://www.facebook.com/steptechglobal/"
              rel="noreferrer"
              target="_blank"
              className="text-white"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          

          <li>
            <a
              href="https://www.instagram.com/steptech_global/"
              rel="noreferrer"
              target="_blank"
              className="text-white"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/steptechglobal"
              rel="noreferrer"
              target="_blank"
              className="text-white"
            >
            <span className="sr-only">Linkedin</span>
            <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd"
             d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"
             clipRule="evenodd"
             />
            </svg>
          </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Steptechglobal"
              rel="noreferrer"
              target="_blank"
              className="text-white"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white 2xl:text-xl">About Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-white 2xl:text-xl" href="/">
                Home
              </a>
            </li>

            <li>
              <a className="text-white 2xl:text-xl" href="/about-us">
                About us
              </a>
            </li>

            <li>
              <a className="text-white 2xl:text-xl" href="/portfolio"> Portfolio </a>
            </li>
            <li>
              <a className="text-white 2xl:text-xl" href="/blog"> Blog </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left ml-0 md:ml-0 lg:-ml-16">
          <p className="text-lg font-medium text-white 2xl:text-xl">Our Services</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-white 2xl:text-xl" href="/web-design-&-development">
                Web Development & Design
              </a>
            </li>

            <li>
              <a className="text-white 2xl:text-xl" href="/graphic-designing"> Graphic Designing </a>
            </li>

            <li>
              <a className="text-white 2xl:text-xl" href="/mobile-app-design-&-development"> Mobile App UI/UX Design & Development </a>
            </li>

            <li>
              <a className="text-white 2xl:text-xl" href="/software-development"> Software Development </a>
            </li>
            <li>
              <a className="text-white 2xl:text-xl" href="/blockchain-development"> Blockchain Development </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left ml-0 md:ml-0 lg:-ml-10">
          <p className="text-lg font-medium text-white 2xl:text-xl">Our Services</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-white 2xl:text-xl" href="/search-enigne-optimization"> Search Engine Optimization </a>
            </li>
            <li>
              <a className="text-white 2xl:text-xl" href="/ecommerce"> E-commerce </a>
            </li>
            <li>
              <a className="text-white 2xl:text-xl" href="/nft"> NFT </a>
            </li>
            <li>
              <a className="text-white 2xl:text-xl" href="/artificial-intelligence"> Artificial Intelligence </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="ml-0 md:ml-0 lg:-ml-7 text-lg font-medium text-white 2xl:text-xl">Contact Us</p>

          <ul className="mt-8 space-y-4 text-sm -ml-0 md:-ml-2">
            <li className="-ml-0  md:-ml-1 lg:-ml-2 tablet:-ml-8">
              <a
                className="flex items-center justify-center gap-2 ltr:sm:justify-start rtl:sm:justify-end"
                href="mailto:steptechaustralia@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 shrink-0 text-white ml-8 md:ml-0 2xl:ml-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="flex-1 text-white text-sm md:text-sm -ml-16 md:ml-0 tablet:ml-1 2xl:ml-0">steptechaustralia@gmail.com</span>
              </a>
            </li>

            <li className="sm:-ml-0 md:-ml-8 lg:-ml-4 tablet:-ml-8">
              <a
                className="flex items-center justify-center gap-2 ltr:sm:justify-start rtl:sm:justify-end"
                href="tel:+61410025346"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 shrink-0 text-white ml-8 md:ml-0 2xl:ml-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="flex-1 text-white text-md 2xl:text-xl -ml-16 tablet:ml-1 md:-ml-0 lg:ml-0">+61 410 025 346</span>
              </a>
            </li>

            <li className="sm:-ml-0 md:-ml-8 lg:-ml-4 tablet:-ml-8">
              <a
                className="flex items-center justify-center gap-2 ltr:sm:justify-start rtl:sm:justify-end"
                href="https://maps.app.goo.gl/W7mzU6nfSoYW25uJ9"
                rel="noreferrer"
                target="_blank"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 shrink-0 text-white ml-8 md:ml-0 2xl:ml-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address className="-mt-0.5 flex-1 not-italic text-white 2xl:text-xl -ml-16 tablet:ml-1 md:ml-0 2xl:ml-0">
              Australia
              </address>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-1">
      <div className="text-center">
        <p className="text-sm text-white sm:order-first mt-2 text-lg 2xl:text-xl">&copy; 2024 All rights reserved to Step Tech AU | Design & Develop by Step Tech AU </p>
      </div>
    </div>
  </div>
</footer>
)
}