import React from 'react'
import { motion } from 'framer-motion'
import join from '../../assets/images/join-us.jpg'
import tech from '../../assets/images/our-tech.jpg'
import intergrity from '../../assets/images/our-integrity.jpg'
import community from '../../assets/images/our-community.jpg'

function Careers() {
  return (
    <motion.main id='#careers' className='overflow-hidden'
    initial={{y: 0, opacity: 0 }}
    animate={{ y: 50, opacity: 1 }}
    transition={{ duration: 1 }}>
      <section className='bg-location-mobile sm:bg-location-tablet lg:bg-location-desktop flex justify-center items-center lg:h-[40vh] border-2 h-[30vh]'>
      <h1 className='text-white text-6xl pt-7'>careers</h1>
      </section>
      <section className='container xl:w-11/12 mx-auto lg:px-6 border-2'>
        <article className='flex flex-col-reverse lg:grid lg:grid-cols-2 pb-10 text-center lg:gap-10 lg:pb-20 py-10 lg:py-16'>

          <div className='lg:text-left'>
            <h2 className='font-mono text-2xl font-bold text-darkGray w-1/2 mx-auto py-7 lg:text-5xl lg:mx-0 lg:w-3/4'>care to join our mission?</h2>
            <p className='w-9/12 mx-auto text-md text-darkGray font-mono lg:text-left lg:mx-0 lg:w-3/4'>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
            <button className='w-1/2 lg:w-[30%] border-2 bg-yellow mx-auto font-mono my-10 outline-none ring-offset-0 py-3 capitalize text-2xl text-white hover:bg-white hover:text-yellow'>
            <a href="#">Say Hello</a>
          </button>
          </div>
          <div>
            <img src={join} alt="join us" className='rounded-full h-[15rem] mx-auto lg:h-[20rem]' />
          </div>
        </article>

      </section>
      <section className='mb-14 container xl:w-11/12 py-10 mx-auto lg:px-6 border-2'> 
        <h2 className='font-mono text-5xl font-bold text-darkGray w-full text-center'>Why join us?</h2>
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
      <section className='container xl:w-11/12 mx-auto lg:px-6 flex flex-col items-center justify-center opacity-65 gap-5 pb-20 border-2'>
        <article className='shadow-lg font-mono text-bgFooter w-10/12 text-center capitalize py-6 sm:flex sm:justify-between sm:items-center sm:px-5'>
          <div className='pb-5 sm:text-left'>
            <h2 className='font-mono text-2xl font-bold w-1/2 mx-auto text-center sm:w-full'>general manager</h2>
            <p>jakarta, indonesia</p>
          </div>
          <div>
            <button className='w-1/2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-white sm:w-[8rem] lg:w-[10rem]'>
              <a href="/">Apply</a>
            </button>
          </div>
        </article>
        <article className='bg-textFooter font-mono text-bgFooter w-10/12 text-center capitalize py-6 sm:flex sm:justify-between sm:items-center sm:px-5'>
          <div className='pb-5 sm:text-left'>
            <h2 className='font-mono text-2xl font-bold w-1/2 mx-auto text-center sm:w-full'>UI/UX Designer</h2>
            <p>yokohama, japan</p>
          </div>
          <div>
            <button className='w-1/2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-white sm:w-[8rem] lg:w-[10rem]'>
              <a href="/">Apply</a>
            </button>
          </div>
        </article>
        <article className='bg-textFooter font-mono text-bgFooter w-10/12 text-center capitalize py-6 sm:flex sm:justify-between sm:items-center sm:px-5'>
          <div className='pb-5 sm:text-left'>
            <h2 className='font-mono text-2xl font-bold w-full mx-auto text-center sm:w-full'>blog content copywriter</h2>
            <p>Newyork, united states</p>
          </div>
          <div>
            <button className='w-1/2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-white sm:w-[8rem] lg:w-[10rem]'>
              <a href="/">Apply</a>
            </button>
          </div>
        </article>
        <article className='bg-textFooter font-mono text-bgFooter w-10/12 text-center capitalize py-6 sm:flex sm:justify-between sm:items-center sm:px-5'>
          <div className='pb-5 sm:text-left'>
            <h2 className='font-mono text-2xl font-bold w-1/2 mx-auto text-center sm:w-full'>graphic designer</h2>
            <p>Newyork, united states</p>
          </div>
          <div>
            <button className='w-1/2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-white sm:w-[8rem] lg:w-[10rem]'>
              <a href="/">Apply</a>
            </button>
          </div>
        </article>
        <article className='bg-textFooter font-mono text-bgFooter w-10/12 text-center capitalize py-6 sm:flex sm:justify-between sm:items-center sm:px-5'>
          <div className='pb-5 sm:text-left'>
            <h2 className='font-mono text-2xl font-bold w-1/2 mx-auto text-center sm:w-full'>fleet supervisor</h2>
            <p>jakarta, indonesia</p>
          </div>
          <div>
            <button className='w-1/2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-white sm:w-[8rem] lg:w-[10rem]'>
              <a href="/">Apply</a>
            </button>
          </div>
        </article>
        <article className='bg-textFooter font-mono text-bgFooter w-10/12 text-center capitalize py-6 sm:flex sm:justify-between sm:items-center sm:px-5'>
          <div className='pb-5 sm:text-left'>
            <h2 className='font-mono text-2xl font-bold w-1/2 mx-auto text-center sm:w-full'>ux analyst</h2>
            <p>lonod, united kingdom</p>
          </div>
          <div>
            <button className='w-1/2 bg-yellow mx-auto font-mono py-3 outline-none ring-offset-0 capitalize text-2xl text-white sm:w-[8rem] lg:w-[10rem]'>
              <a href="/">Apply</a>
            </button>
          </div>
        </article>
      </section>

    </motion.main>
  )
}

export default Careers