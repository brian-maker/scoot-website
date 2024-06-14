import React,{useEffect} from 'react';
import playstore from '../../assets/icons/google-play.svg'
import appstore from '../../assets/icons/app-store.svg'

import useMediaQuery from '../../useMediaQuery';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Calltoaction() {
    const isLargeScreen = useMediaQuery('(min-width: 721px)');
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration
        });
      }, []);
  return (
    <section id='cta' className='semicircles relative overflow-hidden'>
        <div className='bg-cto py-10    lg:px-6 sm:px-5'>
        <div className='container mx-auto text-center text-white md:flex justify-between items-center xl:w-11/12'>
            <div>
            <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl font-bold w-2/3 text-center mx-auto md:mx-0  md:w-7/12 md:text-left font-mono">Sign up and Scoof off today</h2>
            </div>
            
            <div className="flex justify-center my-8 space-x-4">
      {/* Play Store button */}
            <button  data-aos="flip-up" data-aos-duration="1000" >
                <a href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={playstore} alt="Play Store" className="h-12"/>
                </a>
            </button>
                    
            <button  data-aos="flip-up" data-aos-duration="1000"
            data-aos-delay="300">
                {/* Apple Store button */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={appstore} alt="Apple Store" className="h-12" />
                </a>
            </button>
                
        </div>
            
        </div>
        
    </div>

    </section>
    
  )
}

export default Calltoaction