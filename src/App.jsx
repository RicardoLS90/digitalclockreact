import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
 
    const [time, setTime]=useState('');
    const formatTime=(val)=> {
      if (val<10) {
        return '0'
      } else {
        return ''
      }
    } 
    useEffect (()=>{
      const timerID= setInterval(() => tick(), 1000);
      return function cleanup(){
        clearInterval(timerID)
      }
    },[])

    const tick =()=>{
      const d= new Date();
      const h= d.getHours();
      const m= d.getMinutes();
      const s= d.getSeconds();

      setTime(formatTime(h) + h + ':' + 
              formatTime(m) + m +':' + 
              formatTime(s)+ s);
    }

    

  return (
    <div className="App">
      <h1>Hello, what time is it?</h1>
      <div className='Clock'>
        <div className='screen'>
          <h1 className='time'>{time}</h1>
        </div>
      </div>
      
    </div>
  )
}

export default App
