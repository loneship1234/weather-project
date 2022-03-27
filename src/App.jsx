import React,{useState} from 'react';

const API={
  key:"316a2b2dae3fc1ea70d73276da5fd59c",
  base:"https://api.openweathermap.org/data/2.5/"

}
function App() {
  const[query,setQuery]=useState('')
  const[weather,setWeather]=useState({})
  const search=(event)=>{
    if (event.key==='Enter'){
      fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
      .then(res=>res.json())
      .then(result=>{
        setWeather(result)
        setQuery('')
      })
    }
  }
  // 
  const DateBuilder=(d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[d.getDay()]
    let date=d.getDate()
    let month=months[d.getMonth()]
    let year=d.getFullYear()
     return `${day} ${date} ${month} ${year}`
    }
    // 
  return(
    
    <div className={(typeof weather.main != "undefined") ?((weather.main.temp>16)?'app warm':'app'):'app'}>
          
    <main className='h-screen px-6 pb-6'>
  <div className="search-box w-full mb-20 mx-0 mt-0">
   <input onKeyPress={search} value={query} onChange={e=>setQuery(e.target.value)}  className='search-bar block w-full p-4 rounded-b-3xl shadow-md focus:placeholder:text-gray-500' type="text"  placeholder='Search...' />
   </div>
              {/*  */}
              {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location text-white text-5xl text-center text-shadow font-medium">{weather.name}, {weather.sys.country}</div>
            <div className="date text-center  text-white  text-xl text-shadow-1 italic mt-2">{DateBuilder(new Date())}</div>
          </div>
          <div className="weather-box text-center">
            <div className="temp  inline-block my-8 mx-auto relative rounded-md py-4 px-6 text-white text-shadow-3 text-9xl font-black shadow-2xl">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather text-center text-5xl text-white font-extrabold text-shadow">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App