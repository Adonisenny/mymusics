import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
import { useState,useEffect,useRef } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper'
const ThirdPartition = ({topchart,topc,index}) => {
    const [whatsPlaying,setWhatsPlaying] = useState(false)
    const handleClick = () => {   
        setWhatsPlaying(prev => !prev)
    }

    const uri = topc?.hub?.actions?.[1]?.uri
      
      const audioRef = useRef(new Audio(uri))

useEffect(() => {
if(whatsPlaying){
    audioRef.current.play()
}
else{
    audioRef.current.pause()
}
},[whatsPlaying])


    return ( 
        <div>
        
        
           <div className='housediv3'>
            <h3 className='text-gray-300'>{index + 1} </h3>
             <img src={topc?.images?.coverart} alt='coverart' className='imgs p-3 rounded-md'/> 
            
          <p className='divps'>{topc?.title.slice(0,20)}</p>
        &nbsp;&nbsp;&nbsp;
          {!whatsPlaying ? (<FaPlayCircle 
                    size={20}
                    className='btn bg-slate-100'
                    onClick={handleClick}
                    
                    />):(
            <FaPauseCircle
            size={20}
            className='btn bg-slate-100'
            onClick={handleClick}
            />)}
                    
                    
          
          </div>
            
          
        

     
</div> 
    )}
export default ThirdPartition;