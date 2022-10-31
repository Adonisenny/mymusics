import { useEffect, useRef,useState } from "react";
import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
import PlayControls from "./PlayContols";


const Images = ({muse}) => {
    const [isPlaying,setIsplaying] = useState(true)
    
   // console.log(muse.hub.actions[1].uri)
    const audioRef = useRef(new Audio(muse.hub.actions[1].uri))
    useEffect(() => {
    if(isPlaying) {
        audioRef.current.play()
    }else{
        audioRef.current.pause()
    }},[isPlaying])
     return ( 
        <div>
        <PlayControls
        playPauseClick={setIsplaying}
        isPlaying={isPlaying}
        />
           {/* <img src= {muse?.images?.coverart} alt='music art' /> */}
           {/* <audio>
            <button></button>
           </audio> */}
        </div>
     );
}
 
export default Images;
<div>

</div>