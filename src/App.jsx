import {useEffect,useState} from 'react'
import './App.css'
import './index.css'
import Images from './Components/Images';
import Player from './Components/Player';

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
        'X-RapidAPI-Key': '167802d176mshb18125f38ae5fa3p1d4e61jsnb3c6604c2c15',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
       }
     };
     
     const App =  () => {
      const [music,setMusic] = useState([])
      const [trackIndex,setTrackIndex] = useState(0) 
      



      
     


    
    useEffect(() => {
async function fetchdata() {
      const response = await fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
       const data = await response.json();
       
       return data 
      }
      fetchdata()
.then(data => setMusic(data))
      
      },[])
      
    
      const topchart = music.slice(0,5)
      
    
      
    
  
    
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
<h3 className='font-bold'>Top Chart</h3>
{topchart.map((topc)=> {
  return <div className='housediv3'>
    <div className='imgdiv3'>
    <img src={topc?.images?.coverart} alt='coverart' className='img'/>
    </div>
  <p>{topc.title}</p>
  </div>
    
  
})}
</div>
     </div>
     
  )
    } 

export default App;
