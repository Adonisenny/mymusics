import {useEffect,useState} from 'react'
import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
import './App.css'
import './index.css'
import Images from './Components/Images';
import Player from './Components/Player';
import 'swiper/css';
import 'swiper/css/free-mode';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper'

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
      const [music,setMusic] = useState([])
      const [trackIndex,setTrackIndex] = useState(0) 
      const [whatsPlaying,setWhatsPlaying] = useState(false)
      



      
     


    
    useEffect(() => {
async function fetchdata() {
      const response = await fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
       const data = await response.json();
       
       return data 
      }
      fetchdata()
.then(data => setMusic(data))
      
      },[])
      
    
      const topchart = music?.slice(0,5)
      const topPlay = music?.slice(0,7)
      
    
      
    
  
    
  return (
    <div className="App">
      
      <div className='houseps'>
<h3 className='font-bold'>side bar</h3>
<p className='demps'>Discover</p>
<p className='demps'>Top Charts</p>
<p className='demps'>Around You</p>
<p className='demps'>Top Artists</p>

      </div>
    <div className='music-container'>
    {music?.map((muse,index) => {
  return <Images
  
key={muse.key}  
  muse={muse}
  index={index}
  music={music}
/>     
     })
     
    
     }
     </div>


     <div className='div3'>
<h3 className='font-bold text-white'>Top Chart</h3>
{topchart.map((topc, index)=> {
  return <div className='housediv3'>
    <h3 className='text-gray-300'>{index + 1} </h3>
     <img src={topc?.images?.coverart} alt='coverart' className='imgs p-3 rounded-md'/> 
    
  <p className='divps'>{topc.title}</p>
&nbsp;&nbsp;&nbsp;
  <FaPlayCircle 
            size={20}
            className='btn bg-slate-100'
            
            />
            
            
  {console.log(index)}
  </div>
    
  
})}
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
     </div>
     
  )
    } 

export default App;
