import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoFooter from '../../assets/logoFooter.svg';
import SocialMediaIcon from './socialMedia';
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import useMediaQuery from '../../useMediaQuery';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {
  const isLargeScreen = useMediaQuery('(min-width: 721px)');
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
    });
  }, []);
  return (
    <footer className='bg-bgFooter py-10 text-lg font-bold tracking-wider lg:px-6 sm:px-5'>
        <section className='flex flex-col justify-center items-center text-center md:flex-row md:justify-between container mx-auto xl:w-11/12'>
        <div className='md:flex md:space-x-20 md:align-middle md:items-center'>
            <NavLink to="/"
             className=" text-white text-2xl">
              <motion.div
                whileHover={ isLargeScreen ?{
                  scale: 1.1
                }: {}}
                >
                  <img  src={logoFooter} alt="logo"/>
              </motion.div>
            </NavLink>

            <div  className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:py-0 py-4">
              <NavLink data-aos="fade-in" data-aos-duration="1000"  to="/about" className="text-textFooter mt-4">About</NavLink>
              <NavLink data-aos="fade-in" data-aos-duration="1000"  to="/locations" className="text-textFooter">Locations</NavLink>
              <NavLink data-aos="fade-in" data-aos-duration="1000"  to="/careers" className="text-textFooter">Careers</NavLink>
            </div>
          </div>

          <div  className='flex space-x-8 py-5'>
            <SocialMediaIcon icon={facebook} link="https://www.facebook.com/" />
            <SocialMediaIcon icon={instagram} link="https://www.instagram.com/" />
            <SocialMediaIcon icon={twitter} link="https://twitter.com/" />

          </div>
        </section>
    </footer>
  )
}

export default Footer