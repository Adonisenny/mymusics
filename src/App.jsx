import {useEffect,useState,useRef} from 'react';



import './App.css'
import './index.css'
import Images from './Components/Images';
import Player from './Components/Player';

import ThirdPartition from './Components/ThirdPartition';
import FirstSidebar from './Components/FirstSidebar';
import Controls from './Components/Controls';

// const axios = require("axios");
// const options = {
//   method: 'GET',
//   url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
//   params: {genre_code: 'POP'},
//   headers: {
//     'X-RapidAPI-Key': 'e8ab5297camshdfbb47b9ac7d130p1efe56jsnddad2a502ad0',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//   }
// };
// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [music,setMusic] = useState(null)
//   useEffect(() => {
//     axios.request(options).then(function (response) {
//      setIsLoaded(true);
     
//        setMusic(response.data.title)
     
//        console.log(music)
//      }).catch(function (error) {
//        console.error(error);
//      });
 
//    },[])


const options = {
       method: 'GET',
       headers: {
        'X-RapidAPI-Key': 'b34370db6bmsh129f279d2bc7cdfp11712ejsn19a07be8ee98',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
       }
     };
     
     const App =  () => {
      

     useEffect(() => {
async function fetchdata() {
      const response = await fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
       const data = await response.json();
       
       return data 
      }
      fetchdata()
.then(data => setMusic(data))
      
      },[])
      const [music,setMusic] = useState([])
      
      const [currentIndex,setCurrentIndex] = useState(null)
      const [currentSong, setCurrentSong] =useState(music[0])

      const [menuOpen,setMenuOpen] =useState(false)
      const topchart = music?.slice(0,5)
      const topPlay = music?.slice(0,7)
      
      // const currents = music[indexx]?.hub?.actions?.[1]?.uri
      
      

      // const audioRef = useRef(new Audio(currents))
      
    
     
      // const toNextTrack = () => {
       
      //   setCurrentIndex(currentIndex + 1)
      //   setCurrentSong(music[currentIndex + 1])
      //   console.log('clicked')
        
        
      // }
      // const toPrevTrack =() => {
      //   setCurrentIndex(currentIndex - 1)
      //   setCurrentSong(music[currentIndex - 1])
      // }
       
    const getSongData = (muse,index) => {
console.log(index)
setCurrentSong(muse)
setCurrentIndex(index)

    }
    const toNextTrack = () => {
      setCurrentIndex(currentIndex + 1)
      setCurrentSong(music[currentIndex + 1])

    }
    const toPrevTrack = () => {
      if(currentIndex === 0) {
        return;
      }else{
      setCurrentIndex(currentIndex - 1)
      setCurrentSong(music[currentIndex - 1])
      }
    }
  return (
    <>
    <div className="App absolute">
     

 
 <FirstSidebar />

     

    <div className='music-container  grid grid-cols-1 px-32  md:grid-cols-3  md:px-0'>
    <h2 className='block text-center text-white mt-7 md:hidden'>Discover Pop</h2>
    {music?.map((muse,index) => {
  return <Images
  
key={muse.key}  
  muse={muse}
  index={index}
  currentIndex={currentIndex}

  music={music}
 
  getSongData={getSongData}
  
/>     
     })
     
    
     }
     </div>
     <div className='div3 hidden md:block '>
     <h3 className='font-bold text-white'>Top Chart</h3>
      {topchart.map((topc,index) => {
       return <ThirdPartition
        topchart={topchart}
        key={topc.key}
        index={index}
        topc={topc}
        currentIndex={currentIndex}

        />

      })}

</div>

{/* Top Artiste and Swiper */}
{/* <div className="w-full flex flex-col mt-8">
<div className="flex flex-row justify-between items-left">
<h2 className="text-white font-bold text-2xl">
Top Artists

</h2>

</div>
<Swiper
slidesPerView = 'auto'
spaceBetween={10}
freeMode
centeredSlides
centeredSlidesBounds
modules={[FreeMode]}
className='mt-4 m-4'
>
  {topPlay.map((song,i) => {
    return <SwiperSlide
    key={song?.key}
    style={{width:'15%', height:'auto'}}
    className='shadow-lg rounded-full animate-slideright'
    
    >
      <img src={song?.images.background} alt='name' className='rounded-full w-full object-cover' />


    </SwiperSlide>
  })}
  </Swiper>
</div> */}



</div>

 <div className='box stack-top relative bg-blue-300' >
<Controls

currentSong={currentSong}
currentIndex={currentIndex}
music={music}
toNextTrack ={toNextTrack}
toPrevTrack={toPrevTrack}

className='control'

/>  
</div>
       


</> 

    
  )
    } 

export default App;
