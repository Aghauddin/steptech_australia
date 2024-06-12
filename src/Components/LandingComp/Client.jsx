  
  const LOGOS = [
    <img src='https://i.ibb.co/tBBkqYc/image.png' alt='roots' />,
    <img src='https://i.ibb.co/5vJGVMC/image.png' alt='icct' />,
    <img src='https://i.ibb.co/vqq0NtH/image.png' alt='motor-modz' />,
    <img src='https://i.ibb.co/WHng3Ty/image.png' alt='creative-circle' />,
    <img src='https://i.ibb.co/zfBVQP1/image.png' alt='middleman' />,
    <img src='https://i.ibb.co/FmLn3pH/image.png' alt='lbank' />, 
    <img src='https://i.ibb.co/LhWB1xF/image.png' alt='tlg' />,
    <img src='https://i.ibb.co/qRPBBh0/image.png' alt='kudipro' />,
    <img src='https://i.ibb.co/zNc0hFV/image.png' alt='projectinverse' />,
    <img src='https://i.ibb.co/tCb5RZm/image.png' alt='pepe' />,
    <img src='https://i.ibb.co/4TkbJQh/image.png' alt='yaxi' />, 
    <img src='https://i.ibb.co/7zbwS6h/image.png' alt='oshopi' />,
        
  ];
  
  export default function Client() {
    return (
        <div className="relative mx-auto max-w-full px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-full lg:max-w-full flex justify-center items-center">
          <h1 className="mt-20 font-bold tracking-tight text-4xl lg:text-4xl sm:text-6xl capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#A6A6DF] via-[#A6A6DF] to-[#FFFFFF]">
          our clients
          </h1>
          </div>
      <div className="mt-5 relative m-auto w-full overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full  after:-scale-x-100 after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)] gap-7">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[150px] md:w-[300px] items-center gap-10 justify-center"
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
  