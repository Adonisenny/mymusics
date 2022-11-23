// import { useEffect, useRef,useState } from "react";

// import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'

// const PlayControls = ({isPlaying,playPauseClick}) => {
//     return (

//    const uri = currentSong?.hub?.actions?.[1]?.uri
  
      
//   const audioRef = useRef(new Audio(uri))
//   console.log(audioRef)




//   const onScrub = (value) => {
//   // Clear any timers already running
//   clearInterval(intervalRef.current);
//   audioRef.current.currentTime = value;
//   setTrackProgress(audioRef.current.currentTime);
// }
// const onScrubEnd = () => {
//   // If not already playing, start
//   if (!isPlaying) {
//     setIsPlaying(true);
//   }
//   startTimer();
// }
// const intervalRef =useRef()
//     const isReady =useRef(false)
//     // const {duration} =audioRef.current
    
//     const startTimer = () => {
//       // Clear any timers already running
//       clearInterval(intervalRef.current);
  
//       intervalRef.current = setInterval(() => {
//         if (audioRef.current.ended) {
          
//           setIsPlaying(false);
//         } else {
//           setTrackProgress(audioRef.current.currentTime);
//         }
//       }, [2000]);
//     };



// useEffect(() => {
//       audioRef.current.pause();
    
//       audioRef.current = new Audio(uri);
//       setTrackProgress(audioRef.current.currentTime);
    
//       if (isReady.current) {
//         audioRef.current.play();
//         setIsPlaying(true);
//         startTimer();
//       }
//     }, [currentSong]);
    
    
//     const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
//     const trackStyling = `
//       -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
//     `;
    


// <div>
// { isPlaying ? (
            
//             <FaPlayCircle 
//             size={35}
//             className='text-gray-800'
//             onClick={() => playPauseClick(false)}
//             />):(
//             <FaPauseCircle 
//             size={35}
//             className='text-gray-800'
//             onClick={()=> playPauseClick(true)}
//             />)}


// </div>
        
//       );
// }
 
// export default PlayControls;