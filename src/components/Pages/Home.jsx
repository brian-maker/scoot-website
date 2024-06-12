import React from 'react'
import { motion } from 'framer-motion'
import LocateWithApp from '../../assets/icons/locate.svg'
import scooter from '../../assets/icons/scooter.svg'
import ride from '../../assets/icons/ride.svg'
import telemetry from '../../assets/images/telemetry.jpg'
import nearYou from '../../assets/images/near-you.jpg'
import payments from '../../assets/images/payments.jpg'

function Home() {
  const pathVariants = {
    hidden:{
    opacity:0,
    pathLength:0
    },
    visible:{
      opacity:1,
      pathLength:1,
      transition:{
        duration:2,
        ease:"easeIn"
      }
    }
  }
  
  return (
  <motion.main
    initial={{y: 0, opacity: 0 }}
    animate={{ y: 50, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <section className='bg-mobile sm:bg-tablet lg:bg-desktop h-[100vh] bg-cover bg-center home overflow-hidden flex flex-col justify-center items-center'>
    <article className='container xl:w-11/12 lg:flex lg:flex-col lg:justify-items-start align-middle lg:align-top lg:-translate-y-8 '>
      <motion.h1 className='text-white text-center w-2/3 mx-auto mb-3 lg:w-[40rem] lg:text-left lg:-translate-x-[9rem] lg:text-6xl'
      initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      transition={{ duration:2 }}>Scooter sharing made simple</motion.h1>
      <section className='flex flex-col justify-center items-center lg:items-start lg:translate-x-[8rem] xl:translate-x-[16rem]'>
      <motion.p className='w-5/6 text-white text-center mb-10 lg:w-5/12 lg:text-left md:text-xl lg:my-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      >
      Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
      </motion.p>

      <button
      className="bg-yellow  text-white font-mono border-2 border-yellow  text-xl btn  py-3 w-[12rem] outline-none ring-offset-0"
      initial={{ y: 500, opacity: 0 }}
      animate={{ y:220, opacity: 1 }}
      transition={{ duration: 1.1 }}>
          Get Scootin
      </button>
      </section>
      
    </article>
    </section>
    <section className='opacity-80 lg:px-6'>
      <div className='container xl:w-11/12 py-10  border-2 mx-auto lg:flex'>
        <article className='flex flex-col justify-center items-center text-center
        md:flex-row md:gap-[4rem] lg:flex-col lg:items-start lg:gap-4'>
            <img src={LocateWithApp} alt="logo" className='w-14 h-14 md:h-24 md:w-24' />
            <div className='flex flex-col'>
            <h2 className='font-mono text-xl font-bold text-dark-navy my-4 md:my-6 md:text-2xl md:text-left md:mb-6 lg:text-2xl'>Locate with app</h2>
            <p className='w-5/6 mx-auto text-center md:text-left font-sans-serif text-dim-grey md:w-4/6 md:mx-0 lg:w-5/6 lg:text-xl'>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.</p>
            </div> 
          </article>

        <article className='flex flex-col justify-center items-center text-center my-10 md:flex-row md:gap-[4rem] lg:flex-col lg:items-start lg:gap-4'>
          <img src={scooter} alt="logo" className='w-14 h-14 md:h-24 md:w-24' />
          <div className='flex flex-col'>
          <h2 className='font-mono text-xl font-bold text-dark-navy my-4 md:my-6 md:text-2xl md:text-left md:mb-6 lg:text-2xl'>Pick your scooter</h2>
          <p className='w-5/6 mx-auto text-center md:text-left font-sans-serif text-dim-grey md:w-4/6 md:mx-0 lg:w-5/6 lg:text-xl'>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
          </div> 
        </article>

        <article className='flex flex-col justify-center items-center text-center my-10 md:flex-row md:gap-[4rem] lg:gap-4 lg:flex-col lg:items-start'>
          <img src={ride} alt="logo" className='w-14 h-14 md:h-24 md:w-24'  />
          <div>
          <h2 className='font-mono text-xl font-bold text-dark-navy my-4 md:my-6 md:text-2xl md:text-left md:mb-6 lg:text-2xl'>Enjoy the ride</h2>
          <p className='w-5/6 mx-auto text-center md:text-left font-sans-serif text-dim-grey md:w-4/6 md:mx-0 lg:w-5/6 lg:text-xl'>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
          </div> 
        </article>

      </div>
      
      
    </section>

    <section className='opacity-80 py-20 lg:px-6' >
      <div className='container xl:w-11/12   border-2 mx-auto'>
        <article className='flex flex-col-reverse justify-center items-center gap-6 lg:grid lg:grid-cols-2'>
          <div className='text-center gap-6 border-2 lg:text-left'>
            <h2 className='font-mono text-xl font-bold text-dark-navy md:text-2xl lg:text-4xl'>Easy to use riding telemtry</h2>
            <p className='w-5/6 mx-auto text-center font-sans-serif text-dim-grey my-[1rem] md:w-8/12 lg:mx-0 lg:text-left lg:text-xl lg:my-[2rem] lg:w-full'>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
            <button className='w-40 bg-yellow 
            border-2 text-white px-4 py-4 '>
            <a href="/about" className='text-xl font-mono' >
              learn more
            </a>
            </button>
          </div>
          <div className='lg:grid lg:justify-end'>
            <img src={telemetry} alt="telemetry" className='w-52 h-52 md:w-80 md:h-80 rounded-full' />
          </div>
        </article>
        <article className='flex flex-col-reverse justify-center items-center gap-6 lg:grid lg:grid-cols-2 my-10'>
          <div className='text-center gap-6 border-2 lg:text-left'>
            <h2 className='font-mono text-xl font-bold text-dark-navy md:text-2xl lg:text-4xl'>Coming to a city near you</h2>
            <p className='w-5/6 mx-auto text-center font-sans-serif text-dim-grey my-[1rem] md:w-8/12 lg:mx-0 lg:text-left lg:text-xl lg:my-[2rem] lg:w-full'>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
            <button className='w-40 py-4 bg-yellow 
            border-2 text-white px-4'>
            <a href="/locations" className='text-xl font-mono' >
              learn more
            </a>
            </button>
          
          </div>
          <div className='lg:grid  lg:justify-end'>
            <img src={nearYou} alt="telemetry" className='w-52 h-52 rounded-full md:w-80 md:h-80' />
          </div>
        </article>
        <article className='flex flex-col-reverse justify-center items-center gap-6 lg:grid lg:grid-cols-2'>
          <div className='text-center gap-6 border-2 lg:text-left'>
            <h2 className='font-mono text-xl font-bold text-dark-navy md:text-2xl lg:text-4xl'>Zero hassle payments</h2>
            <p className='w-5/6 mx-auto text-center font-sans-serif text-dim-grey my-[1rem] md:w-8/12 lg:mx-0 lg:text-left lg:text-xl lg:my-[2rem] lg:w-full'>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
            <button className='w-40 py-4 bg-yellow 
            border-2 text-white px-4'>
            <a href="/about" className='text-xl font-mono' >
              learn more
            </a>
            </button>
          
          </div>
          <div className='lg:grid lg:justify-end'>
            <img src={payments} alt="telemetry" className='w-52 h-52 rounded-full md:w-80 md:h-80' />
          </div>
        </article>
      </div>
    

    </section>
    </motion.main>
  )
}

export default Home