import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.svg';
import useMediaQuery from '../../useMediaQuery';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }         
    const isLargeScreen = useMediaQuery('(min-width: 721px)');

    const menuVariants = {
        open: { x: 0 },
        closed: { x: '-100%' }
      };
    
      const overlayVariants = {
        open: { opacity: 1, pointerEvents: 'auto' },
        closed: { opacity: 0, pointerEvents: 'none' }
      };

      useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration
        });
      }, []);

      return (
        
        <nav className='fixed  bg-white z-50 w-full sm:px-5'>
          <div className=" flex container mx-auto justify-between py-3 md:py-0 xl:w-11/12 text-lg font-bold tracking-wider z-50">
            <button onClick={toggleMenu} className="text-yellow font-bold md:hidden pl-5">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div
            className='flex items-center'
            initial ={{opacity :0}}
            animate={{opacity: 1}}
            transition={{delay: 1.5, duration: 1.5}}
            >
            <section className='flex space-x-20 justify-center align-middle'>
            <NavLink to="/"
             className="hidden md:block text-white text-2xl">
              <motion.div
                whileHover={ isLargeScreen ?{
                  scale: 1.1
                }: {}}
                >
                  <img src={logo} alt="logo"/>
              </motion.div>
              </NavLink>
            <div  className="hidden md:flex space-x-4">
              <NavLink to="/" className="text-darkGray font-mono lg:hover:text-yellow ">Home</NavLink>
              <NavLink to="/about" className="text-darkGray font-mono lg:hover:text-yellow">About</NavLink>
              <NavLink 
              to="/locations" className="text-darkGray font-mono lg:hover:text-yellow">Locations</NavLink>
              <NavLink 
              to="/careers" className="text-darkGray font-mono lg:hover:text-yellow">Careers</NavLink>
            </div>
            </section>
            </div>

            <motion.button
            whileHover={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderColor: 'bg-yellow',
              color:'#FFD700' 
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
             className="bg-yellow  text-white font-bold w-36 h-12  border-2 border-yellow hidden md:block my-3"
             data-aos="zoom-in" data-aos-duration="1000">
              <a href="#cta">Get Scootin</a>
            </motion.button>

          </div>
        {/* mobile menu */}

          <motion.div 
            className="inset-0 bg-darkGray bg-opacity-90 z-50"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={overlayVariants}
            onClick={toggleMenu}
          />
          {/*mobile logo */}
          <NavLink to="/"
             className="fixed inset-y-3  inset-x-1/2  md:hidden -translate-x-14  w-64 h-24 z-50">
              <motion.div
                whileHover={ isLargeScreen ?{
                  scale: 1.1
                }: {}}
                >
                  <img onClick={toggleMenu} src={logo} alt="logo"/>
              </motion.div>
          </NavLink>
          <motion.div
            className="fixed top-0 left-0 bottom-0 w-72  p-4 z-40 bg-darkGray md:hidden"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            <div>

              {/* close button */}
            <button onClick={toggleMenu} className="text-yellow mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            
            <NavLink to="/" className="text-white block py-2 font-mono" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" className="text-white block py-2 font-mono" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/locations" className="text-white block py-2 font-mono" onClick={toggleMenu}>Locations</NavLink>
            <NavLink to="/careers" className="text-white block py-2 font-mono" onClick={toggleMenu}>Careers</NavLink>
            </div>

            <motion.button
            whileHover={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderColor: 'bg-yellow',
              color: '#FFD700' 
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
             className="bg-yellow hover:bg-blue-700 text-white font-bold py-4 px-14 fixed  left-10 bottom-20 border-2 border-yellow" onClick={toggleMenu}>
              <a href="#cta">Get Scootin</a>
            </motion.button>
          </motion.div>
        </nav>
      );

    
}

export default Navbar;