// import { ReactComponents as Play } from "./assets/play/.svg";
// import { ReactComponents as Pause } from "./assets/play/.svg";
// import { ReactComponents as Next } from "./assets/play/.svg";
// import { ReactComponents as Prev } from "./assets/play/.svg";
// const AudioControls = ({isPlaying,onPlayPauseClick,onPrevClick,onNextClick}) => {
//     return ( 
//         <div className="audio-controls">
//             <button 
//             type="button"
//             className="prev"
//             onClick={onPrevClick}
//             aria-label='Previous'
            
            
//             >
//             <Prev />


//             </button>
//             {isPlaying ? (
//                  <button 
//                  type="button"
//                  className="pause"
//                  onClick={() => onPlayPauseClick(false)}
//                  aria-label='Pause'
                 
                 
//                  >
//                  <Pause />
     
     
//                  </button>
//             ):(
//             <button 
//             type="button"
//             className="play"
//             onClick={()=> onPlayPauseClick(true)}
//             aria-label='Previous'
            
            
//             >
//             <Play />


//             </button>
            
//         )}
//          <button 
//             type="button"
//             className="next"
//             onClick={onNextClick}
//             aria-label='Next'
            
            
//             >
//             <Next />


//             </button>
//         </div>
//      );
// }
 
// export default AudioControls;