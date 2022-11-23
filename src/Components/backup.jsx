import { useEffect, useRef,useState } from "react";
import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';


const Images = ({muse,music}) => {
  
  const [isPlaying,setIsplaying] = useState(false)
  const [musics,setMusics] = useState(music)
  
  const [currentSong,setCurrentSong] = useState(muse)
  const [trackProgress,setTrackProgress] =useState(0)
  const uri = currentSong?.hub?.actions?.[1]?.uri
      // console.log(muse?.hub?.actions?.[1]?.uri)
      const audioRef = useRef(new Audio(uri))

       //  console.log(audioRef)
    // let empty = []
    // const filled = empty.push(got)
    //  console.log(filled)
    // console.log(got[1])oh
    // console.log(got[0])
    // const [trackIndex,setTrackIndex] = useState(muse[index])
    // console.log(music?.hub?.actions?.[1]?.uri)
    
     // console.log(muse.title)
    const handleClick = () => {   
        setIsplaying(prev => !prev)
    }
    const onScrub = (value) => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
    
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsplaying(true);
      }
      startTimer();
    }


    
      
     
     
      
         
      
      

    const intervalRef =useRef()
    const isReady =useRef(false)
    const {duration} =audioRef.current
    

    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
  
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          
          setIsplaying(false);
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [2000]);
    };
    useEffect(() => {
    if(isPlaying) {
        audioRef.current.play()
        startTimer()
        
    }else{
        audioRef.current.pause()
    }},[isPlaying])
    
     //  useEffect(() => {
    //       audioRef.current.pause()
    //       audioRef.current =new Audio(audioRef)
    //       setTrackProgress(audioRef.current.currentTime);

    //  },[index])
    // useEffect(() => {

    // },[])
    useEffect(() => {
      audioRef.current.pause();
    
      audioRef.current = new Audio(uri);
      setTrackProgress(audioRef.current.currentTime);
    
      if (isReady.current) {
        audioRef.current.play();
        setIsplaying(true);
        startTimer();
      }
    }, [currentSong]);


    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`;


    
     return ( 
        <div className="container w-56 h-auto " >


<div className="houseinput">
  {/* {isPlaying &&<input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        className="progress"
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        style={{ background: trackStyling }}
	
      />} */}
        </div>
                     
           <img src= {muse?.images?.coverart} alt='music art' className="imagess" /> 
           <p className='text-white'>{muse?.title}</p>
           
            
           {/* <MdSkipPrevious 
           size={25}
           onClick={toPrevTrack}
           className='btn1'
           color="white"
           />  
           { !isPlaying ?  (
           
            <FaPlayCircle 
            size={25}
            className='btn'
            onClick={handleClick}
            />):(
            <FaPauseCircle 
            size={35}
            className='btn'
            onClick={handleClick}
            
            />)}
          
          <MdSkipNext
          size={30}
          onClick={toNextTrack}
          className='btn2'
          color="white"
          />
 */}

</div>

     );
}
 
export default Images;
