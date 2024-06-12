import React from 'react'
import { motion } from 'framer-motion'
import mobility from '../../assets/images/digital-era.jpg'
import urban from '../../assets/images/better-living.jpg'
import tech from '../../assets/images/our-tech.jpg'
import intergrity from '../../assets/images/our-integrity.jpg'
import community from '../../assets/images/our-community.jpg'
import FAQ from '../Common/Faq'
import Faq2 from '../Common/Faq2'


function About() {
  
  return (
    <motion.main id='#about'
    className='overflow-hidden' 
    initial={{y: 0, opacity: 0 }}
    animate={{ y: 50, opacity: 1 }}
    transition={{ duration: 1 }}>
      <section className='bg-about-mobile sm:bg-about-tablet lg:bg-about-desktop  flex justify-center items-center  border-2 h-[20vh] lg:h-[30vh]'>
        <h1 className='text-white text-6xl'>About</h1>
      </section>
      <section className='container xl:w-11/12 mx-auto lg:px-6 relative '>
        <div className='mobility'>
        <article className='pb-10 text-center 
        flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-10 lg:pb-20 py-10 border-2 '>
        
        <div className='border-2 w-full'>
          <h2 className='font-mono text-2xl font-bold text-darkGray w-3/4 mx-auto lg:text-left lg:text-3xl lg:mx-0 lg:w-3/4 pt-5 lg:pt-0'>Mobility for the digital era</h2>
          <p className='w-9/12 mx-auto text-center text-darkGray font-mono lg:text-left lg:mx-0 lg:w-3/4 py-7'>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
        </div>
        <div className='w-full border-2 arrow-up'>
          <img src={mobility} alt="" className='rounded-full h-[20rem] mx-auto lg:h-[22rem]'/>
        </div>
        </article>
        </div>
        
        <div className="urban">
        <article className='text-center 
        flex flex-col lg:flex-row lg:justify-between lg:gap-10 lg:pb-20 py-10 border-2 '>
        <div className='border-2 w-full arrow-down'>
          <img src={urban} alt="" className='rounded-full h-[20rem] mx-auto lg:h-[22rem]'/>
        </div>
        <div className='w-full'>
          <h2 className='font-mono text-2xl font-bold text-darkGray w-1/2 mx-auto py-7 text-center lg:text-left lg:text-3xl lg:mx-0 lg:w-3/4'>Better urban living</h2>
          <p className='w-9/12 mx-auto text-center text-darkGray font-mono lg:text-left lg:mx-0 lg:w-3/4
          '>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
        </div>
        </article>
        </div>
      </section>
      <section className='mb-14 container xl:w-11/12 py-10 mx-auto lg:px-6'> 
        <h2 className='font-mono text-5xl font-bold text-darkGray w-full text-center'>Our values</h2>
        <div className='pt-10 lg:flex lg:gap-10 lg:justify-evenly mx-auto'>
          <article className='flex flex-col justify-center relative'>
            <img src={tech} alt="" className='rounded-full h-[15rem] lg:h-[18rem] mx-auto'/>
            <span className="circle1 flex items-center justify-center">
                <p className='font-mono font-bold text-darkGray text-xl'>01</p>
            </span>
              <h2 className='font-mono text-2xl font-bold text-darkGray w-1/2 mx-auto mt-16  pb-3 text-center lg:w-full'>Our tech</h2>
              <p className='w-9/12 mx-auto text-md text-darkGray font-mono text-center lg:w-full'>
                We’re using cutting edge te chnology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!
              </p>
          </article>
          <article className='flex flex-col justify-center my-10 relative '>
            <img src={intergrity} alt="" className='rounded-full h-[15rem] lg:h-[18rem] mx-auto'/>
            <span className="circle2 flex items-center justify-center">
                <p className='font-mono font-bold text-darkGray text-xl'>02</p>
            </span>
              <h2 className='font-mono text-2xl font-bold text-darkGray w-1/2 mx-auto mt-14 pb-3 text-center lg:w-full'>Our integrity</h2>
              <p className='w-9/12 mx-auto text-md text-darkGray font-mono text-center lg:w-full'>
              We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.
              </p>
          </article>
          <article className='flex justify-center flex-col relative'>
            <img src={community} alt="" className='rounded-full h-[15rem] lg:h-[18rem] mx-auto'/>
            <span className="circle3 flex items-center justify-center">
                <p className='font-mono font-bold text-darkGray text-xl'>03</p>
            </span>
              <h2 className='font-mono text-2xl font-bold text-darkGray w-1/2 mx-auto mt-14 pb-3 text-center lg:w-full'>Our community</h2>
              <p className='w-9/12 mx-auto text-md text-darkGray font-mono text-center lg:w-full'>
              We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.
              </p>
          </article>

        </div>
      </section>
      <section className='mb-14 container xl:w-11/12 py-10 mx-auto lg:px-6'>
        <h1 className='font-mono text-5xl font-bold text-darkGray w-full text-center mb-7'>FAQ<span className='text-4xl'>s</span></h1>
        <div className='mb-16 w-11/12 mx-auto lg:flex lg:align-top  lg:justify-between '>
          <h2 className='font-mono text-2xl font-bold text-darkGray w-full text-center lg:text-4xl lg:translate-y-7'>How it works</h2>
          <FAQ/>
        </div>
        <div className='mb-16 w-11/12 mx-auto lg:flex lg:align-top  lg:justify-between'>
          <h2 className='font-mono text-2xl font-bold text-darkGray w-full text-center lg:text-4xl lg:translate-y-7'>Safe driving</h2>
          <Faq2/>
        </div>
        
      </section>
    </motion.main>
  )
}

export default About;