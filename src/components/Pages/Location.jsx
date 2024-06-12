import React from 'react'
import { motion } from 'framer-motion'


function Location() {
  return (
    <motion.main id='#locations' className='overflow-hidden'
    initial={{y: 0, opacity: 0 }}
    animate={{ y: 50, opacity: 1 }}
    transition={{ duration: 1 }}>
      <section className='bg-location-mobile sm:bg-location-tablet lg:bg-location-desktop flex justify-center items-center lg:h-[40vh] border-2 h-[30vh]'>
      <h1 className='text-white text-6xl pt-7'>Locations</h1>
      </section>
      <section className='py-12 container xl:w-11/12 mx-auto lg:px-6 '>
        <div className='bg-map-mobile sm:bg-map-tablet lg:bg-map-desktop border-2 mx-auto container xl:w-11/12'>
        </div>
        <article className='sm:hidden grid py-10 gap-5'>
          <button className='w-1/2 border-2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl'>
            New york
          </button>
          <button className='w-1/2 border-2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl' >
            London
          </button>
          <button className='w-1/2 border-2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl'>
            Jakarta
          </button>
          <button className='w-1/2 border-2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl'>
            Yokohama
          </button>
        </article>
        <article className='pt-5 flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center lg:gap-20 lg:py-10 border-2 '>
          <h2 className='font-mono font-semibold text-3xl  text-darkGray text-center w-3/4 mx-auto pb-5 md:w-1/2 lg:w-5/12 lg:text-left lg:text-4xl '>Your city not listed ?</h2>
          <p className='w-7/12 mx-auto text-md text-darkGray font-mono text-center lg:w-8/12 lg:text-left md:w-10/12'>If you'd like to see Scoot in your hometown, be sure to let us know.We track requests and plan launches based on demand.Feel free to message us by clicking the link or messaging us on social.</p>

          <button className='w-1/2 lg:w-[30%] border-2 bg-yellow mx-auto font-mono font-semibold my-10 outline-none ring-offset-0 py-3 capitalize text-2xl text-white hover:bg-white hover:text-yellow'>
            <a href="#">Message Us</a>
          </button>

        </article>
      </section>
    </motion.main>
  )
}

export default Location