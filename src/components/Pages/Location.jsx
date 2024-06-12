import React ,{useEffect}from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Location() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
    });
  }, []);
  
  return (
    <motion.main id='#locations' className='overflow-hidden'
    initial={{y: 0, opacity: 0 }}
    animate={{ y: 50, opacity: 1 }}
    transition={{ duration: 1 }}>
      <section className='bg-location-mobile sm:bg-location-tablet lg:bg-location-desktop flex justify-center items-center lg:h-[40vh] border-2 h-[30vh]'>
      <h1 data-aos="fade-up" data-aos-duration="1000" className='text-white text-6xl pt-7'>Locations</h1>
      </section>
      <section className='py-12 container xl:w-11/12 mx-auto lg:px-6 '>
        <div data-aos="zoom-in" data-aos-duration="1000"  className='bg-map-mobile sm:bg-map-tablet lg:bg-map-desktop border-2 mx-auto container xl:w-11/12'>
        </div>
        <article className='sm:hidden grid py-10 gap-5'>
          <button data-aos="zoom-in" data-aos-duration="1000"  className='w-1/2  bg-ligthyellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-darkGray'>
            New york
          </button>
          <button data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className='w-1/2 bg-ligthyellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-darkGray' >
            London
          </button>
          <button data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className='w-1/2 bg-ligthyellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-darkGray'>
            Jakarta
          </button>
          <button data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700" className='w-1/2 bg-ligthyellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-darkGray'>
            Yokohama
          </button>
        </article>
        <article className='pt-5 flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center lg:gap-20 lg:py-10 border-2 '>
          <h2 data-aos="fade-up" data-aos-duration="1000" className='font-mono font-semibold text-3xl  text-darkGray text-center w-3/4 mx-auto pb-5 md:w-1/2 lg:w-5/12 lg:text-left lg:text-4xl '>Your city not listed ?</h2>
          <p data-aos="fade-up" data-aos-duration="1500" className='w-7/12 mx-auto text-md text-darkGray font-mono text-center lg:w-8/12 lg:text-left md:w-10/12'>If you'd like to see Scoot in your hometown, be sure to let us know.We track requests and plan launches based on demand.Feel free to message us by clicking the link or messaging us on social.</p>

          <button  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className='w-40 lg:w-72 border-2 bg-yellow mx-auto font-mono font-semibold my-10 outline-none ring-offset-0 py-3 capitalize text-2xl text-white hover:bg-white hover:text-yellow'>
            <a href="#">Message Us</a>
          </button>

        </article>
      </section>
    </motion.main>
  )
}

export default Location