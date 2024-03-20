import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const [counter,setCounter]=useState(16)  

  //let counters=15;
  const addValue=()=>{
  //counter=counter+1;
    setCounter(counter+1);
    
    
  }
  const addremove=()=>{
    setCounter(counter-1);
  }
  const addMul=()=>{
    setCounter(counter*2)
  }
  return (
    <>
      <h1>Chai or Reacts</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addValue}>Add Value {counter}</button><br />
      <button onClick={addremove}>Remove value:{counter}</button>
      <button onClick={addMul}>MUlTIply Value:{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
