import ab from '../assets/pp.jpg'

const About = ({darkMode}) => {
  return (
    <section id="about" className={`min-h-[100dvh] overflow-hidden flex items-center justify-center px-4 sm:px-6`}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        <figure
          data-aos='fade-up'
          data-aos-delay='300'
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
            mx-auto h-100 sm:h-112.5 md:h-125 lg:h-137.5 xl:h-150 
            flex items-center justify-center">

            {/* Premium Gradient Circle with Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-70 h-70 
              sm:w-[320px] sm:h-80
              md:w-95 md:h-95
              lg:w-112.5 lg:h-112.5
              xl:w-135 xl:h-92
               z-0"
              data-aos='zoom-in'
              data-aos-delay='600'>
              
              {/* Outer Glow Layer */}
              <div className="absolute inset-0
                bg-gradient-to-br from-[#f97316]/20 via-[#fb923c]/15 to-[#f59e0b]/20 
                blur-2xl"></div>
              
              {/* Main Background with Border */}
              <div className="absolute inset-0 
                bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b]
                p-[3px]">
                <div className="w-full h-full 
                  bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
              </div>
              
              {/* Gradient Border */}
              <div className="absolute inset-0 
                bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#f59e0b] 
                opacity-60 blur-sm"></div>
              
              {/* Inner Border Highlight */}
              <div className="absolute inset-[2px] 
                bg-gradient-to-br from-[#f97316]/30 via-transparent to-[#f59e0b]/30"></div>
            </div>

            {/* Main Image with Enhanced Shadow */}
            <img src={ab}
              alt="About Image"
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-95 
                sm:h-105
                md:h-120
                lg:h-135
                xl:h-150
                w-auto object-contain z-10
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
              data-aos='zoom-in'
              data-aos-delay='400'
            />

           

            
          </div>

       
          
        </figure>

        {/*========= Right Part ==========*/}
        <article
            data-aos='fade-left'
            data-aos-delay='300'
            className='text-center lg:text-left relative order-1 lg:order-2'>
                <header>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl
                    xl:text-6xl font-bold mb-4 sm:mb-6
                    text-transparent bg-gradient-to-r from-orange-400
                    to-orange-600 bg-clip-text'
                    data-aos='fade-up'
                    data-aos-delay='400'>
                        About Me
                    </h1>
                </header>
                <p className={`text-sm sm:text-base lg:text-lg
                    xl:text-xl mb-6 sm:mb-8 leading-relaxed
                    bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    data-aos='fade-up'
                    data-aos-delay='500'>
                    "I’m a Frontend Developer passionate about building functional, visually appealing web applications. I specialize in React, Redux, and Tailwind CSS, focusing on solving real-world problems, collaborating with teams, and continuously learning. I love turning ideas into practical solutions and improving user experiences with clean, modern designs."
                </p>
                <div
                className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8'>
                    <div
                    className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl
                        lg:text-4xl font-bold text-orange-400'>
                          12+
                        </div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Education
                        </div>
                    </div>
                    <div
                    className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl
                        lg:text-4xl font-bold text-orange-400'>
                          6+
                        </div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Month Experience
                        </div>
                    </div>
                    <div
                    className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl
                        lg:text-4xl font-bold text-orange-400'>
                          30+
                        </div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Projects Completed
                        </div>
                    </div>
                </div>
                <button 
                className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center  justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer 
                ${darkMode
                  ? 'text-white bg-orange-500/10'
                  : 'text-gray-800 bg-white/90'
                }`}
                data-aos='fade-up'
                data-aos-delay='800'>
                  Learn More
                </button>
        </article>
      </div>
    </section>
  );
}

export default About