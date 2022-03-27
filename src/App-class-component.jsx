import React from 'react'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      query:'',
      weather:{}
    }
  }

   render(){
     const search=(event)=>{
       if (event.key==='enter'){
         fetch(`${API.base}weather?q=${this.state.query}&units=metric&APPID=${API.key}`)
         .then(res=>res.json())
         .then(result=>this.setState({weather:result})
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
       <div className="app bl">
           <main className='h-screen px-6 pb-6'>
           <div className="search-box w-full mb-20 mx-0 mt-0">
           <input className='search-bar block w-full p-4 rounded-b-3xl shadow-md focus:placeholder:text-gray-500' type="text"  placeholder='Search...' />
           </div>
           <div className="location-box">
             <div className="location text-white text-5xl text-center text-shadow font-medium">New York ,USA</div>
             <div className="date text-center  text-white  text-xl text-shadow-1 italic mt-2">{DateBuilder(new Date())}</div>
             <div className="weather-box text-center">
               <div className="temp inline-block my-8 mx-auto relative rounded-md py-4 px-6 text-white text-shadow-3 text-9xl font-black shadow-2xl">15°C</div>
               <div className="weather text-center text-5xl text-white font-extrabold text-shadow">sunny</div>
             </div>
           </div>
           </main>
        </div>
        ) 
    }      
  }


