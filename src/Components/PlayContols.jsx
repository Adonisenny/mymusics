import { useEffect, useRef,useState } from "react";

import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'

const PlayControls = ({isPlaying,playPauseClick}) => {
    return (

<div>
{ isPlaying ? (
            
            <FaPlayCircle 
            size={35}
            className='text-gray-800'
            onClick={() => playPauseClick(false)}
            />):(
            <FaPauseCircle 
            size={35}
            className='text-gray-800'
            onClick={()=> playPauseClick(true)}
            />)}


</div>
        
      );
}
 
export default PlayControls;