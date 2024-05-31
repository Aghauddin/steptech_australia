  
  const LOGOS = [
    <img src='https://i.ibb.co/7KpqPYm/60292-Converted-09-2.png' alt='' />,
    <img src='https://i.ibb.co/Km6sxW5/60292-Converted-06-1.png' alt='' />,
    <img src='https://i.ibb.co/pjfXVXb/60292-Converted-08-1.png' alt='' />,
    <img src='https://i.ibb.co/KXGmT8T/60292-Converted-07-1.png' alt='' />,
    <img src='https://i.ibb.co/0FxXM5X/google-1-3.png' alt='' />, 
    <img src='https://i.ibb.co/7KpqPYm/60292-Converted-09-2.png' alt='' />,
    <img src='https://i.ibb.co/Km6sxW5/60292-Converted-06-1.png' alt='' />,
    <img src='https://i.ibb.co/pjfXVXb/60292-Converted-08-1.png' alt='' />,
    <img src='https://i.ibb.co/KXGmT8T/60292-Converted-07-1.png' alt='' />,
    <img src='https://i.ibb.co/0FxXM5X/google-1-3.png' alt='' />,     
  ];
  
  export default function Client() {
    return (
        <div className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8 bg-g-purple">
        <div className="sm:max-w-full lg:max-w-full flex justify-center items-center">
          <h1 className="capitalize mt-20 font-bold tracking-tight text-4xl lg:text-4xl sm:text-6xl capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#A6A6DF] via-[#A6A6DF] to-[#FFFFFF]">
          our clients
          </h1>
          </div>
      <div className="mt-5 relative m-auto w-full overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full  after:-scale-x-100 after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[300px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  