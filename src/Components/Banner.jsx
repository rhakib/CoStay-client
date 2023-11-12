
import { Link } from 'react-router-dom';
import bannerBg from '../assets/bannerBg.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Banner = () => {

  useEffect(() => {
    
    Aos.init()
},
    [])
  return (
    <div className='w-full relative '>
     <div className='absolute top-0 w-[100%] h-[100%]' style={{backgroundColor: 'rgba(0, 0, 0, .7)'}}>

     </div>
      <video className='w-[100%] h-[95vh]  object-cover' src={bannerBg} autoPlay loop muted></video>
      <div data-aos="fade-right" data-aos-duration="3000" className="content absolute w-[100%]  flex flex-col justify-center items-center right-3 text-white top-72">
        <h1 className='md:text-6xl text-4xl font-semibold'>Welcome to CoStay</h1>
        <p className='text-2xl mt-4'>Explore the best hotel in town</p>
        <Link to='/rooms'><button className='btn mt-4 opacity-70 border-none hover:text-white hover:bg-black'>Book Now</button></Link>
        
      </div>
    </div>
  );
};

export default Banner;